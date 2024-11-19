import React, { ReactNode} from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface BodyProps{
    children: ReactNode;
}

const Body: React.FC<BodyProps>  = ({ children }) => {
    return (
    <View style={styles.container}>
        {children}
    </View>
    );
};

export { Body };
