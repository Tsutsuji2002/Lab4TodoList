import React from 'react';  
import { Text, StyleSheet } from 'react-native';  

const FormErrorMessage = ({ error, visible }) => {  
    if (!visible || !error) return null;  

    return <Text style={styles.error}>{error}</Text>;  
};  

const styles = StyleSheet.create({  
    error: {  
        fontSize: 14,  
        color: 'red',  
    },  
});  

export default FormErrorMessage;