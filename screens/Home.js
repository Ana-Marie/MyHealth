
import React, { useState } from 'react';
import { View,Text,StyleSheet,TextInput,Image } from 'react-native';
import Header from '../components/Header';
const Home= ()=>{
  const [search,setSearch] = useState();
  return(
    <View style={{flex:1}}>
      <Header text='Minhas vacinas' ></Header>
      <View style={styles.container}>

       <View style={styles.search}>
        <Image  source={require('../images/icon-search.png')}></Image>
        <TextInput style={styles.input}  placeholder="PESQUISAR VACINA..." keyboardType='default' value={search} onChangeText={setSearch} />
       </View> 

      </View>
    
    </View>
  )


}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(173, 212, 208, 1)',
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    padding:15,
    flexDirection:'column',
    justifyContent:'space-evenly',

},
search:{
  backgroundColor:'white',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:10,
  height:28,

},
input:{
  color:'rgba(63, 146, 197, 1)',
  fontFamily:'AveriaLibre-Regular',
  fontSize:16,
  height:28,
  padding:0,
  width:280,
  marginLeft:5,
}

})
export default Home;
