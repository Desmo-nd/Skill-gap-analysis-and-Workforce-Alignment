import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box"; 
import { COLORS, SIZES } from "../constants";
import image1 from '../assets/images/ai.jpg';    
import image2 from '../assets/images/gears.jpeg';
import image3 from '../assets/images/trends.jpeg';
import image4 from '../assets/images/coding.jpeg';
import { Dimensions } from 'react-native';

const Carousel = () => {
    const slides = [
        image1,
        image2,
        image3,
        image4,
    ];
    const { width } = Dimensions.get('window');
    const isBigScreen = width >= 1050;
    const aspectRatio = 2 / 2; // width / height

    return (
        <View>
        <View style={styles.carouselContainer}> 
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{
                    borderRadius: 15, 
                    width: isBigScreen ? (SIZES.width * 0.93 * 0.99) : "94%",
                    height: isBigScreen ? (SIZES.width * 0.8 * 0.33 * aspectRatio) : (SIZES.width * 0.93 * aspectRatio),
                    marginTop: 5,
                }}
                autoplay
                circleLoop
            />
             
        </View>
        <View style={styles.deco1}>
              <View style={styles.innerDeco1}></View>
            </View>   
        </View>
    )
}
export default Carousel;
 
const styles = StyleSheet.create({
    carouselContainer: {
        width:SIZES.width,
        flex: 1,
        alignItems: "center",
        zIndex: 1,
    },
    deco1:{
        backgroundColor: COLORS.red,
        height: 100,
        width: 50,
        marginLeft:-20,
        borderBottomRightRadius:999,
        borderTopRightRadius:999,
        marginTop:-35,
    },

    innerDeco1:{
        backgroundColor: COLORS.primary,
        height: 80,
        width: 40,
        borderBottomRightRadius:999,
        borderTopRightRadius:999,
        marginTop:10
    },
});



