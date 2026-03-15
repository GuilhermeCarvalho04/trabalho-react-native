import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🏠 Home</Text>

      <Text style={styles.subtitle}>
        Bem-vindo ao aplicativo!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login" as never)}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20
  },

  title:{
    fontSize:32,
    fontWeight:"bold",
    marginBottom:10
  },

  subtitle:{
    fontSize:18,
    marginBottom:30
  },

  button:{
    backgroundColor:"#2563EB",
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius:10
  },

  buttonText:{
    color:"#FFF",
    fontSize:16,
    fontWeight:"bold"
  }

});