import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import LinkButton from './LinkButton';

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
            <Text style={styles.title}>ON DEMAND SKILLS</Text>
            {highDemandSkills.map((skill, index) => (
                <View key={index} style={[styles.skillContainer, index === 0 && styles.firstSkill]}>
                    <View>
                        <Image source={require('../assets/images/skillIcon.png')} 
                            style={{ width: 50, height: 50 }} />
                    </View>
                    <Text style={styles.skill}>{skill}</Text>
                    <Text style={styles.skillDescription}>
                        Content creation involves the process of developing and organizing content 
                        for various platforms such as websites, social media, and marketing campaigns. 
                        It includes creating engaging and relevant content, such as articles, videos, 
                        and graphics, tailored to the target audience. 
                    </Text>
                    <LinkButton 
                         title="Learn More"  
                    />
                </View>
            ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: SIZES.small,
        borderRadius: 5,
        margin: SIZES.small,
    },
    title: {
        fontSize:20,
        fontFamily:'bold',
        marginBottom: SIZES.small,
        textAlign: 'center',
        marginTop: SIZES.small,
        color: COLORS.primary,
    },
    firstSkill: {
        backgroundColor: COLORS.red,
    },
    skillContainer: {
        height: SIZES.xLarge*10,
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
        marginHorizontal: 5,

    },
    skill: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'semibold',
        marginHorizontal: 5,

        
    },
    skillDescription:{
        height: SIZES.xLarge*4,
        fontSize: 14,
        color: '#fff',
        fontFamily: 'regular',
        padding: 5,
        marginHorizontal: 5,

    }
});

export default HighDemand;