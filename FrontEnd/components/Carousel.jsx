import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box"; 
import { COLORS, SIZES } from "../constants";
import image1 from '../assets/engineering.jpeg';    
import image2 from '../assets/gears.jpeg';
import image3 from '../assets/trends.jpeg';
import image4 from '../assets/coding.jpeg';
import image5 from '../assets/bet.jpeg';

const Carousel = () => {
    const slides = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];

    const aspectRatio = 2 / 2; // width / height

    return (
        <View style={styles.carouselContainer}> 
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{
                    borderRadius: 15, 
                    width: SIZES.width * 0.83,
                    height: SIZES.width * 0.93 * aspectRatio,
                    marginTop: 5,
                }}
                autoplay
                circleLoop
            />
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    },
});
