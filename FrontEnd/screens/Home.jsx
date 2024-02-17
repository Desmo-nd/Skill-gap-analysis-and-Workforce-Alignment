
import { View, Text, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import styles from './home.styles';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import HighDemand  from '../components/HighDemand';
import Predict from '../components/Predict';

const Home = () => {
  return (
    <SafeAreaView>
    <ScrollView>
     
      <View style={styles.firstContainer}>
        <View>
          <Text style={styles.logo}>Skill<Text style={{ color: 'rgb(160, 33, 33)' }}>Up</Text></Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.welcome}>
            <Text style={styles.header}>Build Your</Text>
            <Text style={styles.career}>Career</Text>
            <Text style={styles.description}>
              {/* Take the first step towards building a successful career. */}
              Enter your skills below to explore new opportunities and bridge the skill gap!
            </Text>
          </View>         
          <Predict/>
          <Carousel />  
        </View>
      </View>
     

      <HighDemand />

    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

