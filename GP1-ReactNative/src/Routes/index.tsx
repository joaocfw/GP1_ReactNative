import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { MyStack } from "./MyStack";

export const Routes = () => {

    return <NavigationContainer>
        <StatusBar backgroundColor='#161616' barStyle='light-content' />
        <MyStack />
    </NavigationContainer>
}