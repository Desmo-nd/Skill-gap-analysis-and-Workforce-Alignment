import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import styles from './home.styles';
import Carousel from '../components/Carousel';
import Button from '../components/Button';

const Home = () => {
  const [skills, setSkills] = useState('');
  const [highDemandSkills, setHighDemandSkills] = useState([]);

  useEffect(() => {
    fetchHighDemandSkills();
  }, []);

  const fetchHighDemandSkills = async () => {
    try {
      const response = await fetch('http://localhost:5000/high-demand-skills');
      const data = await response.json();
      setHighDemandSkills(data.slice(0, 6)); // Limit to 6 skills for display
    } catch (error) {
      console.error('Error fetching high-demand skills:', error);
    }
  };

  const predictSkills = async () => {
    try {
      const response = await fetch('http://192.168.0.109:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skills })
      });
      const data = await response.text();
      console.log('Prediction result:', data);
      // Handle the prediction result as needed
    } catch (error) {
      console.error('Error predicting skills:', error);
    }
  };

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
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginVertical: 10, color: '#fff'}}
            placeholder="Enter your skills"
            value={skills}
            onChangeText={setSkills}
            placeholderTextColor={'#fff'}
          />
          <Button
           title="Predict" 
           onPress={predictSkills}
           style={{backgroundColor:"#fff"}} />
          <Carousel />  
        </View>
      </View>
     


      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          ON DEMAND SKILLS
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {highDemandSkills.map((skill, index) => (
            <View key={index} style={{ backgroundColor: '#f0f0f0', padding: 5, margin: 5 }}>
              <Text>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
