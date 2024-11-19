import React from "react";
import { View, CheckBox, Image, Button } from "react-native";
import { styles } from "./styles";


const Card = ({ image, onRemove, isChecked, onCheck}) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.cardImage} />
            <CheckBox value={isChecked} onValueChange={onCheck}/>
            {isChecked && <Button title="Remover dos favoritos" onPress={onRemove} />}
        </View>
    );
};

export default Card;