import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
const NextVaccineCard = ()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Sarampo</Text>
      <Text style={styles.date}> 24/10/2022</Text>
    </View>
  )


}
const styles= StyleSheet.create({
    container:{
        width:'90%',
        height:80,
        backgroundColor:'white',
        borderRadius:5,
        margin:5,
        padding:10,
       


    },
    texto: {

        fontSize: 36,
        lineHeight: 33,
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
       
    
      },
    date:{
        color:'rgba(139, 139, 139, 1)',
        fontFamily: 'AveriaLibre-Regular',
        fontSize:18,


    }

});

export default NextVaccineCard;