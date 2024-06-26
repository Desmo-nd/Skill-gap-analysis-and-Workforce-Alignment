import React, { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions, useWindowDimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import LinkButton from './LinkButton';

const HighDemand = () => {
    const [highDemandSkills, setHighDemandSkills] = useState([]);
    const { width } = useWindowDimensions();
    const flexBasis = width > 500 ? '30%' : 200; 
    

    // useEffect(() => {
    //     fetch('http://192.168.0.112:5000/high-demand-skills')
    //         .then(response => response.json())
    //         .then(data => setHighDemandSkills(data.high_demand_skills))
    //         .catch(error => console.error(error));
    // }, []);
    useEffect(() => {
        fetch('http://192.168.43.5:5000/high-demand-skills')
            .then(response => response.json())
            .then(data => {
                // Shuffle the skills array
                const shuffledSkills = data.high_demand_skills.sort(() => Math.random() - 0.5);
                // Slice the first 6 skills
                const limitedSkills = shuffledSkills.slice(0, 6);
                setHighDemandSkills(limitedSkills);
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ON DEMAND SKILLS</Text>
            {highDemandSkills.map((skill, index) => (
                <View key={index} 
                style={[
                    styles.skillContainer, 
                    index === 0 && styles.firstSkill, 
                    { flexBasis }, flexBasis === '30%' && styles.bigScreenStyle
                ]}>
                    <View>
                        <Image source={require('../assets/images/skillIcon.png')} 
                            style={{ width: 50, height: 50 }} />
                    </View>
                    <Text style={styles.skill}>{skill}</Text>
                    <Text style={styles.skillDescription}>
                        This skill enhances employability and increases earning potential by expanding expertise, opening up new job opportunities, and leading to promotions and salary increases. Overall, it significantly boosts professional growth and financial well-being.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <LinkButton title="Learn More" />
                    </View>
                </View>
            ))}
        </View>
    );
};

const { width } = Dimensions.get('window');
const isBigScreen = width >= 1050;
const styles = StyleSheet.create({
    container: {
        width: isBigScreen ? SIZES.width * 0.9 : '100%', 
        padding: SIZES.small,
        borderRadius: 5,
        margin: SIZES.small,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal:"auto"
    },
    title: {
        fontSize: 20,
        fontFamily: 'bold',
        marginBottom: SIZES.small,
        textAlign: 'center',
        marginTop: SIZES.small,
        color: COLORS.primary,
        width: '100%',
    },
    firstSkill: {
        backgroundColor: COLORS.red,
    },
    skillContainer: {
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
        flexGrow: 1,
        flexShrink: 0,
    },
    bigScreenStyle: {
        margin: 10,
        padding: 10,
        height: 300,
    },
    skill: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'semibold',
        marginHorizontal: 5,
    },
    skillDescription: {
        height: SIZES.xLarge * 4,
        fontSize: 14,
        color: '#fff',
        fontFamily: 'regular',
        padding: 5,
        marginHorizontal: 5,
    },
    buttonContainer: {
        marginTop: 'auto', // Align the button to the bottom
        width: '100%',
    },
});

export default HighDemand;
