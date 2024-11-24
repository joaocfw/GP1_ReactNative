import React, { useState } from "react";
import { Text, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api/api";
import { styles } from "../SignIn/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import Body from "../../components/Body";
import CustomTextInputSign from "../../components/TextInputSign";
import ButtonSign from "../../components/ButtonSign";
import MainIcon from "../../../src/assets/Group 7.png";
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "SignIn">;

interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

export function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleEnviar = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.get<User[]>("/users", {
        params: { email: email, senha: senha },
      });

      if (response.status === 200) {
        const user = response.data.find((u: User) => u.email === email && u.senha === senha);

        if (user) {
          Alert.alert("Sucesso", "Usuário logado com sucesso!");
          console.log("Usuário logado:", user);

          await AsyncStorage.setItem('userId', user.id);
          
          navigation.navigate("HomeMain");
        } else {
          Alert.alert("Erro", "Email ou senha inválidos.");
        }
      }
    } catch (error) {
      console.error("Erro ao logar usuário:", error);
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <Body customStyle={{ justifyContent: "center", padding: 16, alignItems: 'center' }}>
      <Image style={{ marginBottom: 40 }} source={MainIcon} />
      <CustomTextInputSign
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        iconName="email"
      />
      <CustomTextInputSign
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua Senha"
        secureTextEntry
        iconName="lock"
      />
      <ButtonSign title="Entrar" onPress={handleEnviar} />
      <Text style={styles.footerSignIn}>
        Ainda não tem cadastro?{" \n "}
        <Text style={styles.linkSignIn} onPress={() => navigation.navigate("SignUp")}>
          Clique aqui!
        </Text>
      </Text>
    </Body>
  );
}

export default SignIn;
