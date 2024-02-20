import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";   
import { COLORS, SIZES } from "../constants";


const Universities = () => {
    return (
    <View style={styles.container}>
    
      <View style={styles.carouselCont}>
      <View style={styles.imageContainer}>
            <Image
                source={require("../assets/images/Unis.jpeg")}
                style={{
                    width: SIZES.width*0.45,
                    height: SIZES.height*0.229,
                    borderTopLeftRadius:20,
                    borderBottomLeftRadius:20,
                }}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Universities</Text>
            <Text style={styles.description}>
                Our platform hopes to collaborates with universities to bridge 
                the skill gap by providing valuable insights on the workfoce skill demands.
            </Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container:{
       width: SIZES.width*0.90,
       height: 210,
       marginTop: -25,
       backgroundColor:"#ffb366",
       padding: 20,
       borderRadius: 20,
       zIndex: 1,
   },
   carouselCont:{
       flexDirection: "row",
   },
   textContainer:{
       width: SIZES.width*0.50,
   },
   title:{
       fontSize: 25,
       color: COLORS.red,
       fontFamily: "bold",
       textAlign: "center",
   },
   description:{
       fontSize: 17,
       color: COLORS.primary,
       fontFamily: "regular",
       marginHorizontal: 5,
       
   },
   imageContainer:{
       marginLeft:-20,
       borderRadius:20,

       marginTop: -20,
       backgroundColor: "#000000AA"
       
   }
});

export default Universities;