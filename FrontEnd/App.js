import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home'; 
import Login from './screens/Login';
import Signup from './screens/Signup';
import HighDemandJobs from './screens/HighDemandJobs';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    regular:require("./assets/fonts/Poppins-Regular.ttf"),
    light:require("./assets/fonts/Poppins-Light.ttf"),
    bold:require("./assets/fonts/Poppins-Bold.ttf"),
    medium:require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold:require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold:require("./assets/fonts/Poppins-SemiBold.ttf"),


  })
  if (!loaded) {
    return null;
  }
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HighDemandJobs"
          component={HighDemandJobs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React, {useState}from "react";
// import {Text, TextInput, TouchableOpacity, View } from "react-native";
// import styles from "./auth.styles";
// import { LinearGradient } from 'expo-linear-gradient';
// import { COLORS } from "../constants";
// import { Alert } from "react-native";
// import axios from "axios";
// import {Formik} from "formik";  
// import * as Yup from "yup";   
// import  {MaterialCommunityIcons} from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ButtonSignup from "../components/ButtonSignup";

// const validationSchema = Yup.object().shape({

//   password: Yup.string()
//     .min(8, 'Passwod must be at least 8 characters')
//     .required('Required'),
//   email: Yup.string()
//     .email('Provide a valid email address')
//     .required('Required'),
// });

// const Login = (props) => {
//   const { navigation } = props;
//   const [loader, setLoader] = useState(false);
//   const [responseData, setResponseData] = useState(null);
//   const [obsecureText, setObsequireText] = useState(false);

//   const inValidForm = () => {
//     Alert.alert(
//       "Invalid Form",
//       "Please provide all required fields",
//       [
//         {
//           text: "Cancel",
//           onPress: () => ({}),
//         },
//         {
//           text: "Continue",
//           onPress: () => ({}),
//         },
//       ]
//     );
//   };

//   const login = async (values) => {
//     setLoader(true);
//     try {
//       const endpoint = "http://192.168.0.109:3000/api/login/";
//       const data = values;

//       const response = await axios.post(endpoint, data);
//       if (response.status === 200) {
//         setLoader(false);
//         setResponseData(response.data);

//         await AsyncStorage.setItem('user' + response.data._id, JSON.stringify(response.data));
//         await AsyncStorage.setItem("id", JSON.stringify(response.data._id));
//         navigation.replace('Home');

//       } else {
//         Alert.alert(
//           "Error logging in",
//           "Please provide valid credentials",
//           [
//             {
//               text: "Cancel",
//               onPress: () => ({}),
//             },
//             {
//               text: "Continue",
//               onPress: () => ({}),
//             },
//           ]
//         );
//       }
//     } catch (error) {
//       Alert.alert(
//         "Error",
//         "Oops, Error logging in. Try again with correct credentials",
//         [
//           {
//             text: "Cancel",
//             onPress: () => ({}),
//           },
//           {
//             text: "Continue",
//             onPress: () => ({}),
//           },
//         ]
//       );
//       console.log(error);
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#FFFFFF', '#ADD8E6']}
//       start={{ x: 0, y: 0.5 }}
//       end={{ x: 1, y: 0.5 }}
//       style={styles.container}
//       > 
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={validationSchema}
//         onSubmit={values => login(values)}
//       >
//         {({ handleChange, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (
//           <LinearGradient
//             colors={['#ADD8E6','#FFFFFF']}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//             style={styles.innerContainer}
//             > 
//             <Text style={styles.title}>Sign In</Text>

//             <View style={styles.wrapper}>
//               <Text style={styles.label}>Email</Text>
//               <View style={[styles.inputWrapper, { borderColor: touched.username ? COLORS.secondary : COLORS.offwhite }]}>
//                 <MaterialCommunityIcons
//                   name="email-outline"
//                   size={24}
//                   color={COLORS.gray}
//                   style={styles.iconStye}
//                 />

//                 <TextInput
//                   placeholder="Enter your email"
//                   onFocus={() => { setFieldTouched('email') }}
//                   onBlur={() => { setFieldTouched('email', "") }}
//                   value={values.email}
//                   onChangeText={handleChange("email")}
//                   autoCapitalize="none"
//                   autoCorrect={false}
//                   style={{ flex: 1, fontSize: 18 }}
//                 />
//               </View>
//               {touched.email && errors.email && (
//                 <Text style={styles.errorMessage}>{errors.email}</Text>
//               )}
//             </View>
//             {/* <TextInput placeholder="Email" style={styles.input} /> */}
//             <View style={styles.wrapper}>
//               <Text style={styles.label}>Password</Text>
//               <View style={[styles.inputWrapper, { borderColor: touched.username ? COLORS.secondary : COLORS.offwhite }]}>
//                 <MaterialCommunityIcons
//                   name="lock-outline"
//                   size={24}
//                   color={COLORS.gray}
//                   style={styles.iconStye}
//                 />

//                 <TextInput
//                   secureTextEntry={!obsecureText}
//                   placeholder="Password"
//                   onFocus={() => { setFieldTouched('password') }}
//                   onBlur={() => { setFieldTouched('password', "") }}
//                   value={values.password}
//                   onChangeText={handleChange("password")}
//                   autoCapitalize="none"
//                   autoCorrect={false}
//                   style={{ flex: 1, fontSize: 18 }}
//                 />

//                 <TouchableOpacity onPress={() => setObsequireText(!obsecureText)}>
//                   <MaterialCommunityIcons
//                     name={obsecureText ? "eye-outline" : "eye-off-outline"}
//                     size={18}
//                   />
//                 </TouchableOpacity>

//               </View>
//               {touched.password && errors.password && (
//                 <Text style={styles.errorMessage}>{errors.password}</Text>
//               )}
//             </View>
//             {/* <TextInput placeholder="Password" style={styles.input} secureTextEntry /> */}
//             <ButtonSignup
//               loader={loader}
//               title={"L O G I N"}
//               onPress={isValid ? handleSubmit : inValidForm}
//               isValid={isValid}
//             />

//             <View style={{ marginTop: 10, flexDirection: "row" }}>
//               <Text style={{ marginTop: 0 }}> Don't have an account? </Text>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('Signup')}
//               >
//                 <Text style={{ color: COLORS.red }}> Sign Up</Text>
//               </TouchableOpacity>

//             </View>
//           </LinearGradient>
//         )}
//       </Formik>
//     </LinearGradient>
//   );
// };

// export default Login;
// import React from "react";
// import {TouchableOpacity, View, Text, SafeAreaView, TextInput, StatusBar } from "react-native";
// import styles from "./auth.styles";
// import { LinearGradient } from 'expo-linear-gradient';
// import axios from "axios";
// import { Alert } from "react-native";
// import { COLORS } from "../constants";
// import  {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
// import * as Yup from "yup";   
// import {Formik} from "formik";  
// import { useState } from "react";
// import ButtonSignup from "../components/ButtonSignup";


// const validationSchema = Yup.object().shape({

//   password: Yup.string()
//     .min(8, 'Passwod must be at least 8 characters')
//     .required('Required'),
//   email: Yup.string()
//       .email('provide a valid email address')
//       .required('Required'),    
//   username: Yup.string()
//       .min(3, 'Provide a valid username')
//       .required('Required'),   
// });


// const Signup = ({navigation}) => {
//   const [loader, setLoader] = useState(false);
//     const [obsecureText, setObsequireText] = useState(false);
 

//     const inValidForm = () => {
//         Alert.alert(
//           "Invalid Form",
//           "Please provide all required fields?",
//           [
//             {
//               text: "Cancel", onPress: () => ({}),
//             },
//             {
//               text: "Continue", onPress: () => ({}),
//             },
//           ]
//         )
//     };

//     const registerUser = async (values) => {
//       setLoader(true);
  
//       try{
//           const endpoint ="http://192.168.0.109:3000/api/register";
//           const data = values;
  
//           const response = await axios.post(endpoint, data);
//           if(response.status === 201){
//              navigation.replace('Login')
  
//           }
//       }catch(error){
//           console.log(error)
//       }
//     };
  


//   return (
//     <LinearGradient
//       colors={['rgba(255, 254, 230, 0.7)', 'rgba(6, 66, 66, 0.2)']}            
//       start={{ x: 0, y: 0.5 }}
//       end={{ x: 1, y: 0 }}
//       style={styles.container}
//       >   
//         <Formik
//           initialValues={{email: "", password: "", username: ""}}
//           validationSchema={validationSchema}
//           onSubmit={values => registerUser(values)}
//         >

//           {({ 
//               handleChange,
//               handleSubmit, 
//               touched, 
//               values, 
//               errors, 
//               isValid, 
//               setFieldTouched 
//           }) => (
//               <LinearGradient
//                 colors={['rgba(255, 254, 230, 0.7)', 'rgba(255, 254, 230, 0.7)']}
//                 start={{ x: 0, y: 0.5 }}
//                 end={{ x: 1, y: 0 }}
//                 style={styles.innerContainer}
//                 >   
//                 <Text style={styles.title}>Sign Up</Text>
//                 <View style={styles.wrapper}>
//                   <Text style={styles.label}>Username</Text>
//                   <View style={[styles.inputWrapper, { borderColor: touched.username ? COLORS.secondary : COLORS.offwhite }]}>                      
//                     <MaterialCommunityIcons
//                           name="face-man-profile"  
//                           size={24}
//                           color={COLORS.gray}
//                           style={styles.iconStye}

//                       />

//                       <TextInput
//                           placeholder="Username"
//                           onFocus={() => {setFieldTouched('username')}}
//                           onBlur={()=> {setFieldTouched('username', "")}}
//                           value={values.username}
//                           onChangeText={handleChange("username")}
//                           autoCapitalize="none"
//                           autoCorrect={false}
//                           style={{flex:1, fontSize: 18}}
//                       />
//                   </View>
//                   {touched.username && errors.username && (
//                       <Text style={styles.errorMessage}>{errors.username}</Text>
//                   )}
//                 </View>
//                 {/* <TextInput placeholder="Email" style={styles.input} /> */}
//                 <View style={styles.wrapper}>
//                   <Text style={styles.label}>Email</Text>
//                   <View 
//                     style={[styles.inputWrapper, 
//                       { borderColor: touched.username ? COLORS.secondary : COLORS.offwhite }]}>                      
//                       <MaterialCommunityIcons
//                           name="email-outline"  
//                           size={24}
//                           color={COLORS.gray}
//                           style={styles.iconStye}

//                       />

//                       <TextInput
//                           placeholder="Enter your email"
//                           onFocus={() => {setFieldTouched('email')}}
//                           onBlur={()=> {setFieldTouched('email', "")}}
//                           value={values.email}
//                           onChangeText={handleChange("email")}
//                           autoCapitalize="none"
//                           autoCorrect={false}
//                           style={{flex:1, fontSize: 18}}
//                       />
//                   </View>
//                   {touched.email && errors.email && (
//                       <Text style={styles.errorMessage}>{errors.email}</Text>
//                   )}
//                 </View>
//                 {/* <TextInput placeholder="Password" style={styles.input} secureTextEntry /> */}
//                 <View style={styles.wrapper}>
//                   <Text style={styles.label}>Password</Text>
//                   <View style={[styles.inputWrapper, { borderColor: touched.username ? COLORS.secondary : COLORS.offwhite }]}>                      
//                     <MaterialCommunityIcons
//                           name="lock-outline"  
//                           size={24}
//                           color={COLORS.gray}
//                           style={styles.iconStye}

//                       />

//                       <TextInput
//                           secureTextEntry={obsecureText}
//                           placeholder="Password"
//                           onFocus={() => {setFieldTouched('password')}}
//                           onBlur={()=> {setFieldTouched('password', "")}}
//                           value={values.password}
//                           onChangeText={handleChange("password")}
//                           autoCapitalize="none"
//                           autoCorrect={false}
//                           style={{flex:1, fontSize: 18}}
//                       />

//                       <TouchableOpacity onPress={() => setObsequireText(!obsecureText)}>                                          
//                           <MaterialCommunityIcons 
//                               name={obsecureText? "eye-outline" : "eye-off-outline"}
//                               size={18}
//                           />
//                       </TouchableOpacity>

//                   </View>
//                   {touched.password && errors.password && (
//                       <Text style={styles.errorMessage}>{errors.password}</Text>
//                   )}

//                 </View>

//                 <View style={styles.bottom}>
//                   <ButtonSignup 
//                       title={"S I G N U P"} 
//                       onPress={isValid ?handleSubmit: inValidForm} 
//                       loader={loader}
//                       isValid={isValid}
//                       style={{backgroundColor:COLORS.red}}
//                   /> 
//                 </View>
//               </LinearGradient>
//          )}
//          </Formik>
//     </LinearGradient>
//   );
// };

// export default Signup;
