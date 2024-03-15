import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './profile.styles'; 

const Profile = () => {
  const [skills, setSkills] = useState([
    { name: 'Skill 1', completion: 0 },
    { name: 'Skill 2', completion: 0 },
    { name: 'Skill 3', completion: 0 },
    // Add more skills as needed
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [newCompletion, setNewCompletion] = useState(0);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index].completion = parseInt(value) || 0; 
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    if (newSkill && newCompletion >= 0 && newCompletion <= 100) {
      const newSkills = [...skills, { name: newSkill, completion: newCompletion }];
      setSkills(newSkills);
      setNewSkill('');
      setNewCompletion(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My skills</Text>
      {skills.map((skill, index) => (
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
      ))}
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
