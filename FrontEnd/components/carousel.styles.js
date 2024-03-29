import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const carouselStyles = StyleSheet.create({
    container: {
        width: SIZES.width * 0.90,
        height: 200,
        backgroundColor: '#ffdab3',
        borderRadius: 20,
        zIndex: 1,
    },
    carouselCont: {
        flexDirection: 'row',
        width: '100%',
    },
    imageContainer: {
        borderRadius: 20,
        width: '50%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    textContainer: {
        width: '50%',
    },
    title: {
        fontSize: 25,
        color: COLORS.red,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    description: {
        width: '100%',
        fontSize: 17,
        color: COLORS.primary,
        fontFamily: 'regular',
        marginHorizontal: 9,
    },
    bigScreenStyle: {
        margin: 10,
        padding: 10,
        height: 300,
    },
    bigScreenImage: {
        height: 300,
        marginTop: -10,
        marginLeft: -10,
    },
});

export default carouselStyles;
