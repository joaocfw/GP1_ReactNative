import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

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

    const addFavorite = (favorite: Favorite) => {
        setFavorites((prevFavorites) => [...prevFavorites, favorite]);
    };

    const removeFavorite = (id: string) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => String(favorite.id).trim() !== String(id).trim())
        );
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

