import React from 'react';  
import { MaterialCommunityIcons } from '@expo/vector-icons';  

const Icon = ({ name, onPress }) => {  
    return (  
        <MaterialCommunityIcons name={name} size={24} onPress={onPress} />  
    );  
};  

export default Icon;