import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Favorite {
  id: string;
  image: string;
}

interface FavoritesContextType {
  favorites: Favorite[];
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
  loadFavorites: (userId: string) => void;
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

  const FAVORITES_STORAGE_KEY = "@favorites";

  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem("userId");
      setUserId(storedUserId);
      if (storedUserId) {
        loadFavorites(storedUserId); 
      }
    };
    fetchUserId();
  }, []);

  const loadFavorites = async (userId: string) => {
    try {
      const storedFavorites = await AsyncStorage.getItem(`favorites-${userId}`);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      const saveFavorites = async () => {
        try {
          await AsyncStorage.setItem(`favorites-${userId}`, JSON.stringify(favorites));
        } catch (error) {
          console.error("Erro ao salvar favoritos:", error);
        }
      };
      saveFavorites();
    }
  }, [favorites, userId]);

  const addFavorite = (favorite: Favorite) => {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  };

  const clearFavorites = async () => {
    setFavorites([]);
    if (userId) {
      try {
        await AsyncStorage.removeItem(`favorites-${userId}`);
      } catch (error) {
        console.error("Erro ao limpar favoritos:", error);
      }
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites, loadFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}