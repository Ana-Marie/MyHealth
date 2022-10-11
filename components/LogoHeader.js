import React from 'react';
import { View,Image,Text, StyleSheet } from 'react-native';

const LogoHeader = ()=>{

   return(
    <View style={styles.container} >
      <Image style={styles.img} source={require('../images/icon-vaccine.png')}/>
      <Text style={styles.logoTexto}>MyHealth</Text>
    </View>
  )
    
}

const styles = StyleSheet.create({
  container:{
   flexDirection:'row',
   backgroundColor:'rgba(193, 231, 227, 1)',
   width:'100%',
   alignItems:'center',
   padding:3,
   paddingLeft:18,
  },
  logoTexto:{
    fontStyle:"normal",
    fontSize:32,
    lineHeight:60,
    color:  '#419ED7',
    textAlign:'center',
    fontFamily:'AveriaLibre-Regular',
 
  },
  img:{
    width:51,
    height:51,
  }


})

export default LogoHeader;