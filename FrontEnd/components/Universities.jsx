import React from "react";
import { View, Text, Image, Dimensions} from "react-native"; 
import styles from "./carousel.styles";


const Universities = () => {
    const { width } = Dimensions.get('window');
    const isBigScreen = width >= 1050;
    return (
      <View style={[styles.container, isBigScreen && styles.bigScreenStyle]}>    
      <View style={styles.carouselCont}>
      <View style={styles.imageContainer}>
            <Image
                source={require("../assets/images/Unis.jpeg")}
                style={[styles.image, isBigScreen && styles.bigScreenImage]}            />
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