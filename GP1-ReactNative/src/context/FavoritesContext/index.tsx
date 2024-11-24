import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../Context/ContextSignIn";

interface Favorite {
    id: string;
    image: string;
}

interface FavoritesContextType {
    favorites: Favorite[];
    addFavorite: (favorite: Favorite) => void;
    removeFavorite: (id: string) => void;
    clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};

export const FavoritesProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [favorites, setFavorites] = useState<Favorite[]>([]);
    const [userId, setUserId] = useState<string | null>(null); 
    const { user } = useAuth();
    
    useEffect(() => {
        const loadUserId = async () => {
            const storedUserId = await AsyncStorage.getItem("userId"); 
            setUserId(storedUserId);
        };
        loadUserId();
    }, [user?.id]);

    const loadFavorites = async (userId: string) => {
        try {
            const response = await AsyncStorage.getItem(`@loginApp:favorites:${userId}`);
            if (response) {
                setFavorites(JSON.parse(response));
            } else {
                setFavorites([]); 
            }
        } catch (error) {
            console.error("Erro ao carregar favoritos", error);
            setFavorites([]); 
        }
    };

    const saveFavorites = async (userId: string, updatedFavorites: Favorite[]) => {
        try {
            await AsyncStorage.setItem(`@loginApp:favorites:${userId}`, JSON.stringify(updatedFavorites));
        } catch (error) {
            console.error("Erro ao salvar favoritos", error);
        }
    };

    const addFavorite = (favorite: Favorite) => {
        if (userId) {
            setFavorites((prevFavorites) => {
                const updatedFavorites = [...prevFavorites, favorite];
                saveFavorites(userId, updatedFavorites); 
                return updatedFavorites;
            });
        }
    };

    const removeFavorite = (id: string) => {
        if (userId) {
            setFavorites((prevFavorites) => {
                const updatedFavorites = prevFavorites.filter(
                    (favorite) => String(favorite.id).trim() !== String(id).trim()
                );
                saveFavorites(userId, updatedFavorites);
                return updatedFavorites;
            });
        }
    };

    const clearFavorites = () => {
        if (userId) {
            setFavorites([]);
            AsyncStorage.removeItem(`@loginApp:favorites:${userId}`);
        }
    };

    useEffect(() => {
        if (userId) {
            loadFavorites(userId);
        }
    }, [userId]);

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
