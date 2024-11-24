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
    const { user } = useAuth();

    useEffect(() => {
        const loadFavorites = async () => {
            if (user?.id) {
                try {
                    const response = await AsyncStorage.getItem(`@loginApp:favorites:${user.id}`);
                    if (response) {
                        setFavorites(JSON.parse(response));
                    } else {
                        setFavorites([]);
                    }
                } catch (error) {
                    console.error("Erro ao carregar favoritos", error);
                    setFavorites([]);
                }
            } else {
                setFavorites([]);
            }
        };

        loadFavorites();
    }, [user?.id]);

    const saveFavorites = async (updatedFavorites: Favorite[]) => {
        if (user?.id) {
            try {
                await AsyncStorage.setItem(
                    `@loginApp:favorites:${user.id}`,
                    JSON.stringify(updatedFavorites)
                );
            } catch (error) {
                console.error("Erro ao salvar favoritos", error);
            }
        }
    };

    const addFavorite = (favorite: Favorite) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = [...prevFavorites, favorite];
            saveFavorites(updatedFavorites);
            return updatedFavorites;
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter(
                (favorite) => String(favorite.id).trim() !== String(id).trim()
            );
            saveFavorites(updatedFavorites);
            return updatedFavorites;
        });
    };

    const clearFavorites = () => {
        if (user?.id) {
            setFavorites([]);
            AsyncStorage.removeItem(`@loginApp:favorites:${user.id}`);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
