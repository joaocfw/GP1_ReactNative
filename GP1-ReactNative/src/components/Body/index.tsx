import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles";


interface BodyProps {
  children: React.ReactNode;
  customStyle: ViewStyle;
}

const Body: React.FC<BodyProps> = ({ children, customStyle }) => {
  return <View style={[styles.Body, customStyle]}>{children}</View>;
};

export default Body;
