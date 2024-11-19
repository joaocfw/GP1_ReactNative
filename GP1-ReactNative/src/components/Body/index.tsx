import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface BodyProps{
    children: React.ReactNode;
}

const Body: React.FC<BodyProps>  = ({ children }) => {
    return (
    <View style={styles.container}>
        {children}
    </View>
    );
};

export { Body };
