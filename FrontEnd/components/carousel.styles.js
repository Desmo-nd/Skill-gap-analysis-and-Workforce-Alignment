import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const carouselStyles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.90,
    height: 210,
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
  containerBigScreen: {
    width: SIZES.width * 0.95, // Adjust width for big screens
    height: 800, // Adjust height for big screens
  },
});

export default carouselStyles;
