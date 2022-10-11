import React from 'react';
import { View,TextInput,Text, StyleSheet } from 'react-native';

const Input = (props)=>{
    const{label,placeholder, value,keyboardType,setText,hidePassword,labelStyle,textInputStyle} = props;
        return(
            <View style={styles.container}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput secureTextEntry={hidePassword} keyboardType={keyboardType}  style={textInputStyle} placeholder={placeholder} value={value} onChangeText={setText} />
            </View>
        )
    
}

const styles = StyleSheet.create({
   
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:10,
 
    }

})

export default Input;