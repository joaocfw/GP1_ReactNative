import React, { FC, ReactNode } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

interface MovieListTextProps {
    children: ReactNode; 
}

export const MovieListText: FC<MovieListTextProps> = ({ children }) => {
    return (
        <Text style={styles.titleText}>
            {children}
        </Text>
    );
};