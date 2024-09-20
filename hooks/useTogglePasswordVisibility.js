import { useState } from 'react';  
import { TouchableOpacity } from 'react-native';  
import Icon from '../components/Icon';  

export const useTogglePasswordVisibility = () => {  
    const [passwordVisibility, setPasswordVisibility] = useState(true);  
    const [rightIcon, setRightIcon] = useState('eye-off');  

    const handlePasswordVisibility = () => {  
        setPasswordVisibility(!passwordVisibility);  
        setRightIcon(passwordVisibility ? 'eye' : 'eye-off');  
    };  

    return {  
        passwordVisibility,  
        handlePasswordVisibility,  
        rightIcon,  
    };  
};