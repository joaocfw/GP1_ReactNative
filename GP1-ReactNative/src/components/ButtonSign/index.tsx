import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { styles } from "../ButtonSign/styles";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonSign: React.FC<CustomButtonProps> = ({ title, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSign;
