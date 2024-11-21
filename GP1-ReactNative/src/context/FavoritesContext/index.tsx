import React, { createContext, useContext, useState, ReactNode } from "react";

type FavoriteItem = {
    id: string;
    image: any;
    isChecked: boolean;
};

type FavoritesContextData = {
    favorites: FavoriteItem[];
    addFavorite: (image: any) => void;
    removeFavorite: (id: string) => void;
    checkboxFavorites: (id: string) => void;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
};

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]); // já está correto
    const [modalVisible, setModalVisible] = useState(false);

    const addFavorite = (image: any) => {
        setFavorites([...favorites, { id: Math.random().toString(), image, isChecked: false }]);
    };

    const removeFavorite = (id: string) => {
        setFavorites(favorites.filter((favorite) => favorite.id !== id));
        setModalVisible(true);
    };

    const checkboxFavorites = (id: string) => {
        setFavorites(favorites.map((favorite) =>
            favorite.id === id ? { ...favorite, isChecked: !favorite.isChecked } : favorite
        ));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, checkboxFavorites, modalVisible, setModalVisible }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
   const context = useContext(FavoritesContext);
   if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
    }
    return context;
}
