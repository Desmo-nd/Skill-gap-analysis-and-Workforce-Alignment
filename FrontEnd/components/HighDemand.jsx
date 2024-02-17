import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';


const HighDemand = () => {
    const [highDemandSkills, setHighDemandSkills] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.109:5000/high-demand-skills')
            .then(response => response.json())
            .then(data => setHighDemandSkills(data.high_demand_skills))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>High Demand Skills:</Text>
            {highDemandSkills.map((skill, index) => (
                <View key={index} style={[styles.skillContainer, index === 0 && styles.firstSkill]}>
                    <Text style={styles.skill}>{skill}</Text>
                </View>
            ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    firstSkill: {
        backgroundColor: COLORS.red,
    },
    skillContainer: {
        height: SIZES.xLarge*9,
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
    },
    skill: {
        fontSize: 16,
        color: '#fff',
        
    },
});

export default HighDemand;