import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "../TextInputSign/styles"
import { MaterialIcons } from "@expo/vector-icons";

interface CustomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  iconName: keyof typeof MaterialIcons.glyphMap;
}

const CustomTextInputSign: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  iconName,
}) => {
  return (
    <View style={styles.container}>
         <MaterialIcons name={iconName} style={styles.icon} />
      <TextInput 
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor = "#f6f6f6"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomTextInputSign;