import React from 'react';  
import { Image, StyleSheet } from 'react-native';  

const Logo = ({ uri }) => {  
    return <Image source={{ uri }} style={styles.logo} />;  
};  

const styles = StyleSheet.create({  
    logo: {  
        width: 100,  
        height: 100,  
        marginBottom: 20,  
    },  
});  

export default Logo;