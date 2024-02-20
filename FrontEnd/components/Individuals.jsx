import React from "react";
import { View, Text, Image } from "react-native";   
import styles from "./carousel.styles";
import { SIZES } from "../constants";


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


export default Individuals;
