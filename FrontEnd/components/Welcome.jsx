import React from "react";
import{View, StyleSheet, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants"
import Carousel from "./Carousel";
import Predict from "./Predict";

const welcome = () => {
    return (
        <View style={styles.firstContainer}>
            <View style={styles.logobar}>
                <Text style={styles.logo}>Skill<Text style={{ color: 'rgb(160, 33, 33)' }}>Up</Text></Text>
                <Ionicons name="menu" size={40} color={COLORS.secondary}/>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.decoContainer}>
                    <View style={styles.welcome}>
                        <Text style={styles.header}>Build Your</Text>
                        <Text style={styles.career}>Career</Text>
                        <Text style={styles.description}>
                            Enter your skills below to explore new opportunities and bridge the skill gap!
                        </Text>
                    </View> 
                    <View style={styles.deco}>
                        <View style={styles.innerDeco}></View>
                    </View>        
                </View>
                <Carousel/>  
                <Predict/>
            </View>
        </View>
    );
    }


export default welcome;

const styles = StyleSheet.create({
    firstContainer: {
        backgroundColor: COLORS.primary,
        width: SIZES.width,
        // width: isBigScreen ? SIZES.width * 0.8 : '100%', 
       marginHorizontal:"auto"
      },
    logobar:{
        width: "95%",
        // width: isBigScreen ? SIZES.width * 0.8 * 0.93 : SIZES.width * 0.83,
        marginHorizontal:'3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerContainer:{
        width: "100%",
        // width: isBigScreen ? SIZES.width * 0.8 * 0.99 : SIZES.width * 0.83,
    },
    logo:{
        fontSize: 30,
        color: COLORS.secondary,
        fontFamily: 'bold',
    },
    decoContainer:{
        position: 'relative',
        width: '100%',
    },
    welcome:{
        width: "100%",
        zIndex: 1,
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
       
        // width: isBigScreen ? SIZES.width * 0.8 * 0.9575 : SIZES.width * 0.88,
    },
    header:{
        fontSize: 44,
        textAlign : 'center',
        color: '#fff',
        fontFamily: 'semibold',
    },

    career:{
        marginTop: -30,
        fontSize: 66,
        fontFamily: 'bold',
        textAlign : 'center',
        color: COLORS.secondary,
    },
    description:{
        fontSize: 18,
        color: COLORS.secondary,
        textAlign: 'center',
        fontFamily:'regular',
    },

    deco:{
        position: 'absolute',
        right: 0,
        backgroundColor: COLORS.red,
        height: 100,
        marginLeft:-4,
        borderBottomLeftRadius:999,
        borderTopLeftRadius:999,
        marginTop:20,
    },

    innerDeco:{
        backgroundColor: COLORS.primary,
        height: 80,
        width: 40,
        marginLeft:10,
        borderBottomLeftRadius:999,
        borderTopLeftRadius:999,
        marginTop:10
    },
});