import React from 'react';  
import { SafeAreaView, StyleSheet } from 'react-native';  

const View = ({ isSafe, children, style }) => {  
    return (  
        <SafeAreaView style={[styles.container, style]}>  
            {children}  
        </SafeAreaView>  
    );  
};  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
});  

export default View;