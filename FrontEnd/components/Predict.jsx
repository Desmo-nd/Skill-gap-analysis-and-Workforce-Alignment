import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

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
        <View>
            <TextInput
                placeholder="Enter your skills"
                value={skills}
                onChangeText={setSkills}
            />
            <Button
                title="Predict"
                onPress={predictSkills}
            />
            <Text>{result}</Text>
        </View>
    );
};

export default Predict;
