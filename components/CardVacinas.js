import React, { useState } from 'react';
import { View,Text,StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

const CardVacina =(props)=>{
    const {vaccineName,dose,imgProf,nextDose,openEdition} =  props;

    console.log(imgProf);
    return(
        <TouchableOpacity style={styles.card} onPress={openEdition}>
            <Text style={styles.vaccineName}>{vaccineName}</Text>
            <View style={styles.dose}>
              <Text style={styles.doseText}>{dose}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.img} source={imgProf}/>
            </View>

            <Text style={styles.nextDose}>{nextDose}</Text>
        </TouchableOpacity>

    )

}
 const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        width:150,
        height:125,
        borderRadius:10,
        margin:5,
        display:'flex',
        padding:5
       
       
    },
    vaccineName:{
        fontFamily:'AveriaLibre-Regular',
        color:'rgba(63, 146, 197, 1)',
        fontSize:16,
        alignSelf:'center',
        padding:5,
    },
    dose:{
        backgroundColor:'rgba(63, 146, 197, 1)',
        width:75,
        alignSelf:'center',
    },
    doseText:{
        fontFamily:'AveriaLibre-Regular',
        color:'white',
        fontSize:12,
        textAlign:'center',

    },
    imageContainer:{
        backgroundColor:'black',
        width:'100%',
        marginTop:5,
        height:60,
    },
    nextDose:{
        color:'rgba(253, 121, 121, 1)',
        fontSize:8,
        fontFamily:'AveriaLibre-Regular',
        alignSelf:'flex-end',
        paddingRight:5,

    },
    img:{
        width:'100%',
        height:'100%',
    }

 })
export default CardVacina;