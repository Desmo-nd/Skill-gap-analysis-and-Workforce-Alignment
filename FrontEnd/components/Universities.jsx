import React from "react";
import { View, Text, Image } from "react-native"; 
import styles from "./carousel.styles";
import { SIZES } from "../constants";


const Universities = () => {
    return (
    <View style={styles.container}>
    
      <View style={styles.carouselCont}>
      <View style={styles.imageContainer}>
            <Image
                source={require("../assets/images/Unis.jpeg")}
                style={{
                    width: SIZES.width*0.45,
                    height: SIZES.height*0.229,
                    borderTopLeftRadius:20,
                    borderBottomLeftRadius:20,
                }}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Universities</Text>
            <Text style={styles.description}>
                Our platform hopes to collaborates with universities to bridge 
                the skill gap by providing valuable insights on the workfoce skill demands.
            </Text>
        </View>
        
      </View>
    </View>
  );
};


export default Universities;