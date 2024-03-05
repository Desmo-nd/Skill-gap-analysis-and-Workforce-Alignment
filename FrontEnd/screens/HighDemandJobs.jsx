import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import styles from './highdemand.styles';
import { LinearGradient } from 'expo-linear-gradient';


const HighDemandJobs = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.109:5000/load_data')
            .then(response => response.json())
            .then(data => {
                setJobs(data.high_demand_jobs);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching high-demand jobs:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    const removePunctuation = (text) => {
        return text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    };
    
    const capitalizeFirstLetter = (string) => {
        return string.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <LinearGradient
                    colors={['rgba(255, 254, 230, 0.7)', 'rgba(6, 66, 66, 0.2)']}            
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.container}
                    >
                        <Text style={styles.header}>High-Demand Jobs</Text>
                        <FlatList
                            data={jobs}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.skillContainer}>
                                    <Text style={styles.jobTitle}>{capitalizeFirstLetter(removePunctuation(item['Job Title']))}</Text>
                                    <Text style={styles.salary}>Salary Range: {item['Salary Range']}</Text>
                                    <Text style={styles.skill}>Skills:</Text>
                                    {item.tokenized_skills.split(',').map((skill, index) => (
                                        <Text style={styles.skills} key={index}>{capitalizeFirstLetter(removePunctuation(skill.trim()))}</Text>
                                    ))}
                                </View>
                            )}
                        />
                </LinearGradient>
            </ScrollView>
         </SafeAreaView>
    );
};

export default HighDemandJobs;

