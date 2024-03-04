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


