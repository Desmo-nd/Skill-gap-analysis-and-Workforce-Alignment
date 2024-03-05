import React, { useState } from "react";
import{View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants"
import { BlurView } from 'expo-blur';
import Carousel from "./Carousel";
import Predict from "./Predict";
import SignBtn from "./SignBtn";
import { useNavigation } from '@react-navigation/native';


const welcome = () => {
    const [isMenuVisible, setIsmenuVisible] = useState(false);

    const toggleMenu =() =>{
        setIsmenuVisible(!isMenuVisible);
    }
    const navigation = useNavigation();

    return (
        <View style={styles.firstContainer}>
            <View style={styles.logobar}>
                <Text style={styles.logo}>Skill<Text style={{ color: 'rgb(160, 33, 33)' }}>Up</Text></Text>
                <TouchableOpacity onPress={toggleMenu}>
                    <Ionicons name="menu" size={40} color={COLORS.secondary}/>
                </TouchableOpacity>
            </View>
            {isMenuVisible && (
                <BlurView intensity={110} tint="dark" style={StyleSheet.absoluteFill}>
                    <TouchableOpacity onPress={toggleMenu} style={{ zIndex:5 }} />
                </BlurView>
            )}
            {isMenuVisible && (
                <View style={styles.menu}>
                   <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={toggleMenu} style={styles.closeIcon}>
                            <Ionicons name="close" size={40} color={COLORS.secondary} />
                        </TouchableOpacity>
                    </View> 
                    <TouchableOpacity style={styles.menuCont}>
                        <Text style={styles.menutext}>Home</Text>
                    </TouchableOpacity>                  
                    <TouchableOpacity style={styles.menuCont}>
                        <Text style={styles.menutext}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuCont}>
                        <Text style={styles.menutext}>Upload Resume</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity 
                        style={styles.menuCont} 
                        onPress={() => navigation.navigate('HighDemandJobs')}
                    >
                        <Text style={styles.menutext}>On demand Jobs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuCont}>
                        <Text style={styles.menutext}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuCont}>
                        <Text style={styles.menutext}>About Us</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonCont}>
                        <SignBtn 
                            title="Sign In" 
                            style={styles.Logout}
                            onPress={() => navigation.navigate('Login')}    
                        />
                    </View>    
                </View>
            )}
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
        marginTop: SIZES.medium,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        height: SIZES.height,
        width: "50%",   
        backgroundColor: COLORS.primary,
        padding: 10,
        position: 'absolute',
        right: 0,
        zIndex: 2,

    },
    menuCont:{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
    },
    menutext:{
        color: COLORS.secondary,
        fontSize: 20,
        fontFamily: 'semibold',
        marginVertical: 10,
    },
    buttonCont:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    Logout:{
        bottom: 0,
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
        marginRight:-20,
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