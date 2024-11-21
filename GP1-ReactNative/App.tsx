import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./src/Routes/MyStack";
import { StatusBar } from "react-native";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import Favorites from "./src/screens/Favorites";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#161616' barStyle='light-content' />
      <MyStack />
      {/* <FavoritesProvider>
        <Favorites/>
      </FavoritesProvider> */}
    </NavigationContainer>
  );}
