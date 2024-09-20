import React from 'react';  
import { Pressable, Text, StyleSheet } from 'react-native';  

const Button = ({ onPress, style, children }) => {  
    return (  
        <Pressable onPress={onPress} style={[styles.button, style]}>  
            <Text style={styles.buttonText}>{children}</Text>  
        </Pressable>  
    );  
};  

const styles = StyleSheet.create({  
    button: {  
        padding: 10,  
        borderRadius: 8,  
        backgroundColor: '#FFA500',
    },  
    buttonText: {  
        color: '#FFFFFF',  
        fontWeight: '700',  
        textAlign: 'center',  
    },  
});  

export default Button;