import React,{useState} from "react";
import {View,Text,TouchableOpacity,Alert} from "react-native";
import Input from "../../components/input";
import {styles} from "./styles";

export default function Contato(){

const [mensagem,setMensagem] = useState("");

function enviar(){

Alert.alert("Mensagem enviada!");

}

return(

<View style={styles.container}>

<Text style={styles.title}>Contato</Text>

<Input
icon="message"
placeholder="Digite sua mensagem"
value={mensagem}
onChangeText={setMensagem}
/>

<TouchableOpacity style={styles.button} onPress={enviar}>

<Text style={styles.buttonText}>Enviar</Text>

</TouchableOpacity>

</View>

);
}