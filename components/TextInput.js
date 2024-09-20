import React from 'react';  
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';  
import Icon from './Icon';  

const TextInput = ({ leftIconName, rightIcon, handlePasswordVisibility, ...props }) => {  
    return (  
        <View style={styles.container}>  
            {leftIconName && <Icon name={leftIconName} />}  
            <RNTextInput style={styles.input} {...props} />  
            {rightIcon && <Icon name={rightIcon} onPress={handlePasswordVisibility} />}  
        </View>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flexDirection: 'row',  
        alignItems: 'center',  
        marginVertical: 10,  
    },  
    input: {  
        flex: 1,  
        borderWidth: 1,  
        borderColor: '#ccc',  
        borderRadius: 8,  
        padding: 10,  
    },  
});  

export default TextInput;