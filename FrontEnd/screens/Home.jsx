
import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './home.styles';
import HighDemand  from '../components/HighDemand';
import { COLORS, SIZES } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import WorkWith from '../components/WorkWith';
import Role from '../components/Role';
import Welcome from '../components/Welcome';


const Home = () => {
  return (
    <SafeAreaView >
      <View style={{height:SIZES.height}}>
        <ScrollView>
          <StatusBar barStyle="light-content"  backgroundColor={COLORS.primary}/>
          <Welcome/>
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
      </View>
    </SafeAreaView>
  );
};

export default Home;

