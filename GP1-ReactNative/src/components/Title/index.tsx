import React from "react";
import { styles } from "../Title/styles"
import { View, Image, Text } from "react-native";
import IconeTitle from "../../../src/assets/image 2.png"

interface CustomTitleProps {
    iconSource: any;
    title: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({
    iconSource,
    title,
}) => {
    return(
        <View style={styles.containerTitle}>
            <Image source={IconeTitle} style={styles.iconTitle}/>
            <Text style={styles.title}>{title}</Text>
        </View>

    );
}
export default CustomTitle;