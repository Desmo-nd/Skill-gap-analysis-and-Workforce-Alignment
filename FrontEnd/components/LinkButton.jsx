import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { COLORS, SIZES } from "../constants";

const LinkButton = ({ title, onPress }) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width <= 500; 
  const buttonWidth = isSmallScreen ? '33%' : '40%'; 
  const fontSize = isSmallScreen ? 18 : 16;
  const marginTop = isSmallScreen ? 10 : 35; // Adjust the marginTop value for big screens

  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.btnStyle, { width: buttonWidth, marginTop }]}
    >
        <Text style={[styles.btnTxt, { fontSize }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default LinkButton

const styles = StyleSheet.create({
    btnStyle:{
        height: 36,
        marginVertical: SIZES.xSmall,
        marginHorizontal: '3%',
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btnTxt:{
        fontFamily: 'bold',
        color: "#000",
        fontSize: 18,
        // marginVertical: 10
    },
});
