import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";   
import { COLORS, SIZES } from "../constants";

const Government = () => {
    return (
        <View style={styles.container}>
            <View style={styles.carouselCont}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/Government.jpeg")}
                        style={{
                            width: SIZES.width * 0.45,
                            height: SIZES.height * 0.229,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}
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

const styles = StyleSheet.create({
    container: {
        width: SIZES.width * 0.90,
        height: 210,
        marginTop: -25,
        backgroundColor: "#ffdab3",
        padding: 20,
        borderRadius: 20,
        zIndex: 1,
    },
    carouselCont: {
        flexDirection: "row",
    },
    textContainer: {
        width: SIZES.width * 0.50,
    },
    title: {
        fontSize: 25,
        color: COLORS.red,
        fontFamily: "bold",
        textAlign: "center",
    },
    description: {
        fontSize: 17,
        color: COLORS.primary,
        fontFamily: "regular",
        marginHorizontal: 9,
    },
    imageContainer: {
        marginLeft: -20,
        borderRadius: 20,
        marginTop: -20,
    },
});

export default Government;
