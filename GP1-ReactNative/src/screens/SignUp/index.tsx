import React, { useState } from "react";
import { Text, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api/api";
import { styles } from "../../screens/SignUp/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import Body from "../../components/Body";
import CustomTextInputSign from "../../components/TextInputSign";
import ButtonSign from "../../components/ButtonSign";
import MainIcon from "../../../assets/Group 7.png"

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "SignUp">

export function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSubmit = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    const newUser = { nome, email, senha };

    try {
      const checkEmailResponse = await api.get("/users", { params: { email } });

      if (checkEmailResponse.data.length > 0) {
        Alert.alert("Erro", "Este e-mail já está em uso. Por favor, escolha outro.");
        return;
      }

      await api.post("/users", newUser);
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");

      setTimeout(() => {
        navigation.navigate("SignIn");
      }, 1500);
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error);
      Alert.alert("Erro", "Erro ao cadastrar usuário.");
    }
  };

  return (
    <Body customStyle={{ justifyContent: "center", padding: 20, alignItems: 'center' }}>
      <Image style = {{marginBottom: 40}} source={MainIcon} />
      <CustomTextInputSign
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu Nome Completo"
        iconName="person"
      />
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
      <ButtonSign title="Cadastrar" onPress={handleSubmit} />
      <Text style={styles.footerSignUp}>
        Já possui cadastro?{" \n "}
        <Text style={styles.linkSignUp} onPress={() => navigation.navigate("SignIn")}>
          Faça login!
        </Text>
      </Text>
    </Body>
  );
}
export default SignUp;