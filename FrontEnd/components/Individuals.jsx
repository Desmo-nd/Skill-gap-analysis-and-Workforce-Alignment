import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";   
import { COLORS, SIZES } from "../constants";


const Individuals = () => {
    return (
    <View style={styles.container}>
    
      <View style={styles.carouselCont}>
      <View style={styles.imageContainer}>
            <Image
                source={require("../assets/images/Individuals.jpeg")}
                style={{
                    width: SIZES.width*0.45,
                    height: SIZES.height*0.229,
                    borderTopLeftRadius:20,
                    borderBottomLeftRadius:20,
                }}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Individuals</Text>
            <Text style={styles.description}>
                Our platform provides insights on the most in-demand skills in the workforce 
                to help individuals make informed decisions on their career paths.
            </Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: SIZES.width*0.90,
        height: 210,
        marginTop: -25,
        backgroundColor:"#ffdab3",
        padding: 20,
        borderRadius: 20,
        zIndex: 1,
    },
    carouselCont:{
        flexDirection: "row",
    },
    textContainer:{
        width: SIZES.width*0.50,
    },
    title:{
        fontSize: 25,
        color: COLORS.red,
        fontFamily: "bold",
        textAlign: "center",
    },
    description:{
        fontSize: 17,
        color: COLORS.primary,
        fontFamily: "regular",
        marginHorizontal: 10,
        
    },
    imageContainer:{
        marginLeft:-20,
        borderRadius:20,
 
        marginTop: -20,
        
    }
});

export default Individuals;
