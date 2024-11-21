import React from "react";
import { Text } from "react-native";
import Body from "../../components/Body";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">
export const Home = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <Body customStyle={{ justifyContent: "center", padding: 16, alignItems: 'center' }}>
            <Text> Home </Text>
        </Body>
    )
}