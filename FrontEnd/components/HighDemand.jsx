import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import image1 from '../assets/images/skillcon.png';  


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
            <Text style={styles.title}>High Demand Skills</Text>
            {highDemandSkills.map((skill, index) => (
                <View key={index} style={[styles.skillContainer, index === 0 && styles.firstSkill]}>
                    <View>
                        <img src="asssets/" alt="" />
                    </View>
                    <Text style={styles.skill}>{skill}</Text>
                </View>
            ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        margin: SIZES.small,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        marginBottom: SIZES.small,
        textAlign: 'center',
        marginTop: SIZES.small,
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