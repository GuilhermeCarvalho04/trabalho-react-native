import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { palette } from "../../global/themas";

export default function Produtos(){

const [produtos,setProdutos] = useState<any[]>([]);

useEffect(()=>{

async function buscarProdutos(){

const response = await fetch("https://fakestoreapi.com/products");

const data = await response.json();

setProdutos(data);

}

buscarProdutos();

},[]);

return(

<View style={styles.container}>

<Text style={styles.title}>Lista de Produtos</Text>

<FlatList
data={produtos}
keyExtractor={(item)=> item.id.toString()}
renderItem={({item})=>(
<View style={styles.card}>
<Text style={styles.nome}>{item.title}</Text>
<Text style={styles.preco}>R$ {item.price}</Text>
</View>
)}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:palette.background
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:20
},

card:{
backgroundColor:"#FFF",
padding:15,
borderRadius:10,
marginBottom:10
},

nome:{
fontWeight:"bold"
},

preco:{
color:palette.primary,
marginTop:5
}

});