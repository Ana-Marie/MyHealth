import React from 'react';
import { View,Image,Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props)=>{
    const{text}=props

   return(
    <View style={styles.container} >
      <TouchableOpacity style={styles.hamburgerMenu}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
      </TouchableOpacity>
      <Text style={styles.logoTexto}>{text}</Text>
    </View>
  )
    
}

const styles = StyleSheet.create({
  container:{
   flexDirection:'row',
   backgroundColor:'rgba(193, 231, 227, 1)',
   width:'100%',
   alignItems:'center',
   padding:5,
   paddingLeft:18,
  },
  logoTexto:{
    fontStyle:"normal",
    fontSize:36,
    lineHeight:60,
    color:  '#419ED7',
    textAlign:'center',
    fontFamily:'AveriaLibre-Regular',
    marginLeft: 10,
 
  },
  rectangle:{
    backgroundColor:'#ADD4D0',
    width:40,
    height:7,
  },
  hamburgerMenu:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    height:30,
  }


})

export default Header;