import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Button from './Button';
import { SIZES } from '../constants';
const Predict = () => {
    const [skills, setSkills] = useState('');
    const [result, setResult] = useState('');

    const predictSkills = async () => {
        try {
            const formData = new FormData();
            formData.append('skills', skills);

            const response = await fetch('http://192.168.0.109:5000/predict', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            setResult(renderPredictions(data.predictions));
        } catch (error) {
            console.error('Error predicting skills:', error);
        }
    };

    const renderPredictions = predictions => {
        const formattedPredictions = predictions.map(prediction => {
            const cleanSkill = prediction.Skill.replace(/[^\w\s]/gi, ''); // Remove all non-word characters except spaces
            return `${cleanSkill}: ${prediction['Demand Level']}`;
        });
        return formattedPredictions.join('\n');
    };

    return (
        <View style={{marginTop:-30}}>
            <TextInput
                placeholder="Enter your skills"
                placeholderTextColor={"#fff"}
                value={skills}
                onChangeText={setSkills}
                style={styles.textcontainer}
            />
            <Button
                title="Predict"
                onPress={predictSkills}
            />
            <Text>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  textcontainer:{
    width:SIZES.width*0.8,
    marginHorizontal:'3%',
    width:'93%',
    height: SIZES.xxLarge,
    border: 1,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: "#fff"
  }
})

export default Predict;
