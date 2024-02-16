import { StyleSheet } from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
    firstContainer:{
        backgroundColor:COLORS.primary,
        padding:20,
        width: SIZES.width,
    },

    innerContainer:{
        width: SIZES.width * 0.88,
    },
    logo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.secondary,
        marginTop: SIZES.medium,
        fontFamily: 'sans-serif-light',
    },

    header:{
        fontSize: 44,
        textAlign : 'center',
        color: '#fff',
        fontWeight: 'semibold',
    },

    career:{
        fontSize: 66,
        fontWeight: 'bold',
        textAlign : 'center',
        color: '#fff',
    },

    welcome:{
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
    },

    description:{
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'sans-serif-light',
    },

    Btn:{
        backgroundColor: COLORS.red,
        color: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }





})

export default styles;