import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

// const { width } = Dimensions.get('window');
// const isBigScreen = width >= 1050;
const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: COLORS.primary,
    padding: 20,
    width: SIZES.width,
    // width: isBigScreen ? SIZES.width * 0.8 : '100%', 
   marginHorizontal:"auto"
  },
    logobar:{
        width: SIZES.width*0.95,
        // width: isBigScreen ? SIZES.width * 0.8 * 0.93 : SIZES.width * 0.83,
        marginHorizontal:'3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerContainer:{
        width: SIZES.width * 0.95,
        // width: isBigScreen ? SIZES.width * 0.8 * 0.99 : SIZES.width * 0.83,
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
        width: SIZES.width * 0.95,
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
    footer:{
        backgroundColor: COLORS.primary,
        height: 40,
        width: SIZES.width,
        // width: isBigScreen ? SIZES.width * 0.8 : '100%', 
        alignItems: 'center',
        marginHorizontal:"auto"
    },
    footerText:{
        color: COLORS.secondary,
        fontFamily: 'regular',
        fontSize: 16,
        marginTop:10,
    },
    







})

export default styles;