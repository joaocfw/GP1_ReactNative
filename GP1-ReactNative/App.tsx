import React from "react";
import { Routes } from "./src/Routes";
import { AuthProvider } from "./src/Context/ContextSignIn";
import { FavoritesProvider } from "./src/Context/FavoritesContext";

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Routes />
      </FavoritesProvider>
    </AuthProvider>
  );
}
