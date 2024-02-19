import React from 'react';
import { Text, View} from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const WorkWith = () => {

    return (
        <View style={styles.firstContainer}>
            <View style={styles.deco1}>
                <View style={{flexDirection:"row"}}>
                <View style={styles.innerDeco1}></View>
              <Text style={styles.work}>WHO WE WORK WITH</Text>
                </View>
             
            </View> 
           <View style={styles.deco}>
              <View style={styles.innerDeco}></View>
            </View>
              
           
    </View>
    );
};

const styles = StyleSheet.create({
    firstContainer:{
        backgroundColor:COLORS.primary,
        padding:20,
        width: SIZES.width,
        height: 370
    },
    deco1:{
        backgroundColor: COLORS.red,
        height: 100,
        width: 50,
        marginLeft:-30,
        borderBottomRightRadius:999,
        borderTopRightRadius:999,
        // marginTop:-35,
    },

    innerDeco1:{
        backgroundColor: COLORS.primary,
        height: 80,
        width: 40,
        borderBottomRightRadius:999,
        borderTopRightRadius:999,
        marginTop:10
    },
    work:{
        width: SIZES.width * 0.83,
        textAlign:"center",
        color:COLORS.secondary,
        fontSize:20,
        fontFamily:'bold',
        marginTop:20
    
    },
    deco:{
        backgroundColor: COLORS.red,
        height: 100,
        alignSelf: 'flex-end',
        marginRight: -30,
        borderBottomLeftRadius:999,
        borderTopLeftRadius:999,
        marginTop:120,
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

export default WorkWith;