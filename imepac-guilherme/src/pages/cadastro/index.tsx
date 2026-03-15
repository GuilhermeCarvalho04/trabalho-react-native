import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Input from "../../components/input";

export default function Cadastro() {

  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {

    if (!nome.trim() || !email.trim() || !senha.trim()) {

      const msg = "Todos os campos são obrigatórios.";

      if (Platform.OS === "web") {
        alert(msg);
      } else {
        Alert.alert("Atenção", msg);
      }

      return;
    }

    if (senha.length < 6) {

      const msg = "A senha deve conter no mínimo 6 caracteres.";

      if (Platform.OS === "web") {
        alert(msg);
      } else {
        Alert.alert("Segurança", msg);
      }

      return;
    }

    const sucessoMsg = "Sua conta foi criada com sucesso!";

    if (Platform.OS === "web") {
      alert(sucessoMsg);
    } else {
      Alert.alert("Sucesso", sucessoMsg);
    }

    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.wrapper}>

        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Preencha os dados abaixo</Text>

        <Input
          icon="person"
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Input
          icon="email"
          placeholder="E-mail"
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
          onPress={handleCadastro}
        >
          <Text style={styles.actionText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryAction}
          onPress={() => navigation.navigate("Login" as never)}
        >
          <Text style={styles.secondaryText}>
            Já possui conta? Fazer login
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}