import { StyleSheet } from "react-native";
import { palette } from "../../global/themas";

export const styles = StyleSheet.create({

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

button:{
backgroundColor:palette.primary,
height:50,
borderRadius:10,
alignItems:"center",
justifyContent:"center",
marginTop:10
},

buttonText:{
color:"#FFF",
fontWeight:"bold"
}

});