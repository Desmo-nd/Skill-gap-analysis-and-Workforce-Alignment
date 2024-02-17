import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const HighDemand = () => {
    const [highDemandSkills, setHighDemandSkills] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.109:5000/high-demand-skills')
            .then(response => response.json())
            .then(data => setHighDemandSkills(data.high_demand_skills))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>High Demand Skills:</Text>
            {highDemandSkills.map((skill, index) => (
                <Text key={index}>{skill}</Text>
            ))}
        </View>
    );
};

export default HighDemand;