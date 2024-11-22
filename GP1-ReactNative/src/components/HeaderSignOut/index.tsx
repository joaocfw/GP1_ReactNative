import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../HeaderSignOut/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "SignIn">;

interface HeaderSignOutProps {
  userName: string;
  onSignOut: () => void;
}

const HeaderSignOut: React.FC<HeaderSignOutProps> = ({ userName, onSignOut }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSignOut = () => {
    onSignOut();
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.HeaderSignOut}>
      <Text style={styles.headerSignOutText}>Bem-vindo, {userName}.</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.HeaderSignOutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSignOut;
