import React, { useState } from 'react';
import { View,Text,StyleSheet, ImageBackground, Image, Button, TouchableOpacity,Dimensions } from 'react-native';
import { useVacineStore } from '../store/vacinas';
import { useDispatch } from 'react-redux'
import { reducerSetVaccine } from '../redux/vaccineSlice';
const CardVacina =(props)=>{
    const dispatch = useDispatch();
    const {navigation, item} = props;
    
   /* const {vaccine} = props.item*/
    /*const {vaccines} = useVacineStore();
    const ArrayOriginal = [...vaccines]
     const isEquals = (obj1,obj2)=> {        
        return JSON.stringify(obj1) == JSON.stringify(obj2)
    }
  
     /*const getIndex = ()=>{
        
        for ( i = 0 ; i<vaccines.length;i++){
          
            if(isEquals(vaccines[i],item)){
                return i;
            }
        }
        return null;
     } 

    const index = getIndex();*/
    

   
    
    const goToEditarVacina = () => {
        console.log("Editar",{item})
        dispatch(reducerSetVaccine(item))
        navigation.navigate('EditarVacina');  
      }
   
  
    return(
        
       <TouchableOpacity style={styles.card} onPress={goToEditarVacina}>
           <Text style={styles.vaccineName}>{item.vaccineName}</Text>
            <View style={styles.dose}>
                    <Text style={styles.doseText}>{item.dose}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.img} source={{uri:item.comprovante}}/>
            </View>

    <Text style={styles.nextDose}>{item.nextVaccination}</Text>
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