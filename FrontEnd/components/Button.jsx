import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const Button = ({title, onPress,}) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={styles.btnStyle}
    >
        <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
   
    btnStyle:{
        height:45,
        width:'93%',
        marginVertical:SIZES.xSmall,
        marginHorizontal:'3%',
        backgroundColor:COLORS.red,
        justfyContent:'center',
        alignItems:'center',
        borderRadius:12
    },

    btnTxt:{
        fontWeight:'bold',
        color:COLORS.secondary,
        fontSize:18,
        marginVertical:10
    },

})