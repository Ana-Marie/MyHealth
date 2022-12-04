import React, { useState } from 'react';
import { View,Text,ActivityIndicator,StyleSheet } from 'react-native';

const LoadingSpinner = (props)=>{
    const {msg} = props
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator
            size="large"
            color="#419ED7"
            />
            <Text style={styles.msg} >{msg}</Text>
        </View>
    )
}

export default LoadingSpinner;
 const styles = StyleSheet.create({
    msg:{
        fontSize:18,
        color:"#419ED7",
        fontFamily:'AveriaLibre-Regular',
    }

 });