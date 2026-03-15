import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {palette} from "../../global/themas";

export default function Perfil(){

return(

<View style={styles.container}>

<Text style={styles.title}>Perfil</Text>

<Text style={styles.text}>Nome: Guilherme</Text>
<Text style={styles.text}>Email: guilherme@email.com</Text>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:palette.background
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:20
},

text:{
fontSize:18
}

});