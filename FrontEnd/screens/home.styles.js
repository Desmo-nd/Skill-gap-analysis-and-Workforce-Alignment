import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../constants';

// const { width } = Dimensions.get('window');
// const isBigScreen = width >= 1050;
const styles = StyleSheet.create({
  
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