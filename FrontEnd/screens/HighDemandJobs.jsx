import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

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
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>High-Demand Jobs</Text>
            <FlatList
                data={jobs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{capitalizeFirstLetter(removePunctuation(item['Job Title']))}</Text>
                        <Text style={{ marginBottom: 5 }}>Salary Range: {item['Salary Range']}</Text>
                        <Text style={{ fontWeight: 'bold' }}>Skills:</Text>
                        {item.tokenized_skills.split(',').map((skill, index) => (
                            <Text key={index}>{capitalizeFirstLetter(removePunctuation(skill.trim()))}</Text>
                        ))}
                    </View>
                )}
            />
        </View>
    );
};

export default HighDemandJobs;
