import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
const NextVaccineCard = (props)=>{
  const {item}=props
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>{item.vaccineName}</Text>
      <Text style={styles.date}> {item.nextVaccination}</Text>
    </View>
  )


}
const styles= StyleSheet.create({
    container:{
        width:'95%',
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