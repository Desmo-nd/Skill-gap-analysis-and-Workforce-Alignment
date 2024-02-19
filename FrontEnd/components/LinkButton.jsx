import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const LinkButton = ({title, onPress,}) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={styles.btnStyle}
    >
        <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default LinkButton

const styles = StyleSheet.create({
   
    btnStyle:{
        height:40,
        width:'33%',
        marginVertical:SIZES.xSmall,
        marginHorizontal:'3%',
        backgroundColor:COLORS.secondary,
        justfyContent:'center',
        alignItems:'center',
        borderRadius:5
    },

    btnTxt:{
        fontFamily:'bold',
        color:"#000",
        fontSize:18,
        marginVertical:10
    },

})