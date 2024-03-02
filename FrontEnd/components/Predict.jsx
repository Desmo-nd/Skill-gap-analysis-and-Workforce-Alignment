import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Modal } from 'react-native';
import Button from './Button';


const Predict = () => {
    const [skills, setSkills] = useState('');
    const [result, setResult] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


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
            setModalVisible(true);
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
            <View style={styles.resultsContainer}>
                {/* <Text>{result}</Text> */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.results}>{result}</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  textcontainer:{
    width: "93%",
    marginHorizontal: "3.5%",
    height: 44,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 17,
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000BB',
  },
  results:{
    fontSize: 26,
    fontFamily: 'semibold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  }
})

export default Predict;
