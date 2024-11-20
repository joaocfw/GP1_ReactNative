import React from "react";
import { View, Image, Button } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { styles } from "./styles";

type CardProps = {
     image: any;
     onRemoved: () => void;
    isChecked: boolean;
    onCheck: (value: boolean) => void;

}

const Card: React.FC<CardProps> = ({ image, onRemoved, isChecked, onCheck}) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.cardImage} />
            <CheckBox value={isChecked} onValueChange={onCheck}/>
            {isChecked && (<Button title="Remover dos favoritos" onPress={onRemoved} />)}
        </View>
    );
};

export default Card;