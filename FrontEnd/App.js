import React from 'react';
import { ScrollView} from 'react-native';
import Home from './screens/Home';
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
  return (
    <ScrollView >
      <Home/>
    </ScrollView>
  );
}


