import React from "react";
import { View, Text, Image, Dimensions } from "react-native";   
import styles from "./carousel.styles";
import { SIZES } from "../constants";


const Individuals = () => {
    const { width } = Dimensions.get('window');
    const isBigScreen = width >= 1050;

    return (
    <View style={[styles.container, isBigScreen && styles.containerBigScreen]}>
    
      <View style={styles.carouselCont}>
      <View style={styles.imageContainer}>
            <Image
                source={require("../assets/images/Individuals.jpeg")}
                style={{
                    width: isBigScreen ? SIZES.width * 0.5 : SIZES.width * 0.45,
                    height: isBigScreen ? SIZES.height * 0.3 : SIZES.height * 0.229,
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
