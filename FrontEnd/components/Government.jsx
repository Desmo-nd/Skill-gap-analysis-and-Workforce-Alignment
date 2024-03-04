import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './carousel.styles';

const Government = () => {
    const { width } = useWindowDimensions();
    const isBigScreen = width >= 1050;

    return (
        <View style={[styles.container, isBigScreen && styles.bigScreenStyle]}>
            <View style={styles.carouselCont}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/Government.jpeg')}
                        style={[styles.image, isBigScreen && styles.bigScreenImage]}                    />
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
