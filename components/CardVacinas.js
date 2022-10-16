import React, { useState } from 'react';
import { View,Text,StyleSheet, ImageBackground, Image, Button, TouchableOpacity,Dimensions } from 'react-native';
import { useVacineStore } from '../store/vacinas';
const CardVacina =(props)=>{
    const {navigation, item,index} = props;
   /* const {vaccine} = props.item*/
    const {vaccines} = useVacineStore();
    const vaccine = vaccines[index];
    const goToEditarVacina = () => {
        navigation.navigate('EditarVacina',{index});  
      }
   
  
    return(
        
       <TouchableOpacity style={styles.card} onPress={goToEditarVacina}>
           <Text style={styles.vaccineName}>{vaccine.vaccineName}</Text>
            <View style={styles.dose}>
                    <Text style={styles.doseText}>{vaccine.dose}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.img} source={{uri:vaccine.comprovante}}/>
            </View>

    <Text style={styles.nextDose}>{vaccine.nextVaccination}</Text>
    </TouchableOpacity>

    )

}
 const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        width: (Dimensions.get('window').width/2)-25,
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
        height:80,
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