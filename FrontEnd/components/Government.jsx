import React from "react";
import {View, Text, Image } from "react-native"; 
import styles from "./carousel.styles";  


const Government = () => {
    return (
        <View style={styles.container}>
            <View style={styles.carouselCont}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/Government.jpeg")}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Government</Text>
                    <Text style={styles.description}>
                        Our platform collaborates with government agencies to identify key skill gaps 
                        and develop strategies for a more skilled workforce, e.g. Curriculum Alignment.
                    </Text>

                </View>
            </View>
        </View>
    );
};



export default Government;
