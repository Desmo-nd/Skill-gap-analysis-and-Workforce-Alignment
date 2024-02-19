
import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './home.styles';
import Carousel from '../components/Carousel';
import HighDemand  from '../components/HighDemand';
import Predict from '../components/Predict';
import { COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import WorkWith from '../components/WorkWith';
import Role from '../components/Role';



const Home = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <StatusBar barStyle="light-content"  backgroundColor={COLORS.primary}/>
     
      <View style={styles.firstContainer}>
        <View style={styles.logobar}>
          <Text style={styles.logo}>Skill<Text style={{ color: 'rgb(160, 33, 33)' }}>Up</Text></Text>
          <Ionicons name="menu" size={40} color={COLORS.secondary}/>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.decoContainer}>
            <View style={styles.welcome}>
              <Text style={styles.header}>Build Your</Text>
              <Text style={styles.career}>Career</Text>
              <Text style={styles.description}>
                {/* Take the first step towards building a successful career. */}
                Enter your skills below to explore new opportunities and bridge the skill gap!
              </Text>
            </View> 
            <View style={styles.deco}>
              <View style={styles.innerDeco}></View>
            </View>        
          </View>
          <Carousel/>  
          <Predict/>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="arrow-down"
          size={30}
          color="white"
          backgroundColor={COLORS.red}

          style={{
            alignSelf: 'center',
            marginTop: -22,
            borderRadius: 999,
            padding: 8,
          }}
        />
      </TouchableOpacity>
      <HighDemand />
      <WorkWith/>
      <Role/>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 
        <Text style={{ color: COLORS.red }}>SkillUp</Text> All rights reserved.</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

