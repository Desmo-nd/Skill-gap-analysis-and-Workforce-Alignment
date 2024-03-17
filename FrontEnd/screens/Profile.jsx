import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useUser } from '../contexts/UserContext'; // Correctly import the useUser hook;

import styles from './profile.styles';

const Profile = () => {
  const { userData } = useUser(); // Use the useUser hook to access user data
  const { id: userId, hasShop } = userData;
  
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newCompletion, setNewCompletion] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('id'); // Use the correct key 'id'
        if (storedUserId) {
          const cleanedUserId = storedUserId.replace(/"/g, ''); // Remove double quotes from user ID
          console.log('Cleaned User ID:', cleanedUserId);
          fetchSkills(cleanedUserId); // Pass the cleaned user ID to fetchSkills
        } else {
          console.log('Stored user ID is null or empty');
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId();
  }, []);
  
  const fetchSkills = (userId) => { // Receive userId as a parameter
    axios.get(`http://192.168.0.112:3000/skill/${userId}`)
    
      .then(response => {
        setSkills(response.data.skills);
        setLoading(false); // Set loading to false after fetching skills
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
        setLoading(false); // Set loading to false in case of error
      });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index].completion = parseInt(value) || 0;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    if (newSkill && newCompletion >= 0 && newCompletion <= 100) {
      const skillData = { name: newSkill, completion: newCompletion };
      axios.post(`http://192.168.0.112:3000/skill/${userId}/add`, skillData)
        .then(response => {
          const newSkills = [...skills, response.data.Skill];
          setSkills(newSkills);
          setNewSkill('');
          setNewCompletion(0);
        })
        .catch(error => {
          console.error('Error adding skill:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My skills</Text>
      {loading ? ( // Display loader while loading
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        skills.map((skill, index) => (
          <View key={index} style={styles.skillContainer}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <TextInput
              style={styles.input}
              value={skill.completion.toString()}
              onChangeText={(value) => handleSkillChange(index, value)}
              keyboardType="numeric"
            />
            <Text>%</Text>
          </View>
        ))
      )}
      <View style={styles.addSkillContainer}>
        <TextInput
          style={styles.skillinput}
          value={newSkill}
          onChangeText={setNewSkill}
          placeholder="Skill Name"
        />
        <TextInput
          style={styles.perinput}
          value={newCompletion.toString()}
          onChangeText={(value) => setNewCompletion(parseInt(value) || 0)}
          keyboardType="numeric"
          placeholder="% Completion"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddSkill}>
          <Text style={styles.addbtn}>Add Skill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
