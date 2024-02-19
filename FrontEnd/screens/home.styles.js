import { StyleSheet } from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
    firstContainer:{
        backgroundColor:COLORS.primary,
        padding:20,
        width: SIZES.width,
    },
    logobar:{
        width: SIZES.width*0.87,
        marginHorizontal:'3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerContainer:{
        width: SIZES.width * 0.88,
    },
    logo:{
        fontSize: 30,
        color: COLORS.secondary,
        fontFamily: 'bold',
    },
    decoContainer:{
        flexDirection: 'row',
        width:SIZES.width
    },
    welcome:{
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
        width: SIZES.width * 0.88,
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
        backgroundColor: COLORS.red,
        height: 100,
        // width: 50,
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

  
    







})

export default styles;