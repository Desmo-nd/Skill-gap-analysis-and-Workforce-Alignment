import React from 'react';
import { Text, View, Image} from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const Role = () => {

    return (
        <View style={styles.firstContainer}>
            <Text style={styles.role}>OUR ROLE IN BRIDGING THE</Text>
            <Text style={styles.gap}>SKILL GAP</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={styles.desCotnainer}>
                    <Text style={styles.description}>
                        Our app empowers you to bridge the skill gap by leveraging 
                        machine learning. Explore in-demand skills and new opportunities 
                        to advance your career effortlessly.
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/skillIcon.png')} 
                        style={{ width: 170, height: 180, borderRadius:999}} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    firstContainer:{
        padding:SIZES.small,
        borderRadius:5,
        margin:SIZES.small,    
    },
    role:{
        fontSize:30,
        fontFamily:'bold',
        marginBottom: SIZES.small,
        marginTop: SIZES.small,
        color: COLORS.primary,
    },
    gap:{
        fontSize:30,
        fontFamily:'bold',
        marginBottom: SIZES.small,
        marginTop: SIZES.small,
        color: COLORS.red,
        marginTop: -25,
    },
    desCotnainer:{
        width: '64%',

    },
    description:{
        fontSize:18,
        fontFamily:'regular',
        color: COLORS.primary,
        
    },
    imageContainer:{
        marginTop:-50,
    }
});

export default Role;