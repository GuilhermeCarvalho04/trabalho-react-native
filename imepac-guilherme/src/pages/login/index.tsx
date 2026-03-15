import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Input from "../../components/input";

export default function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {

    if (!email.trim() || !senha.trim()) {

      const msg = "Por favor, preencha todos os campos.";

      if (Platform.OS === "web") {
        alert(msg);
      } else {
        Alert.alert("Erro", msg);
      }

      return;
    }

    const sucesso = "Login realizado com sucesso!";

    if (Platform.OS === "web") {
      alert(sucesso);
    } else {
      Alert.alert("Sucesso", sucesso);
    }

    navigation.navigate("Home" as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.wrapper}>

        <Text style={styles.title}>Acesso</Text>
        <Text style={styles.subtitle}>Bem-vindo de volta!</Text>

        <Input
          icon="email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Input
          icon="lock"
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.action}
          onPress={handleLogin}
        >
          <Text style={styles.actionText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryAction}
          onPress={() => navigation.navigate("Cadastro" as never)}
        >
          <Text style={styles.secondaryText}>
            Não tem conta? Criar nova conta
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}