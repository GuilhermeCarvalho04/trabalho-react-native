import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Input from "../../components/input";
import { styles } from "./styles";

export default function CadastroProduto(){

const [nome,setNome] = useState("");
const [preco,setPreco] = useState("");

function salvar(){

if(!nome || !preco){
Alert.alert("Erro","Preencha todos os campos");
return;
}

Alert.alert("Sucesso","Produto cadastrado!");

}

return(

<View style={styles.container}>

<Text style={styles.title}>Cadastrar Produto</Text>

<Input
icon="inventory"
placeholder="Nome do produto"
value={nome}
onChangeText={setNome}
/>

<Input
icon="attach-money"
placeholder="Preço"
value={preco}
onChangeText={setPreco}
/>

<TouchableOpacity style={styles.button} onPress={salvar}>

<Text style={styles.buttonText}>Salvar</Text>

</TouchableOpacity>

</View>

);
}