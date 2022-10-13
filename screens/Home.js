
import React, { useState } from 'react';
import { View,Text,StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';
import CardVacina from '../components/CardVacinas';
import Header from '../components/Header';
const Home= (props)=>{
  const goToEditarVacina =()=>{
    props.navigation.navigate('EditarVacina');
    
}
const goToNovaVacina=()=>{
  props.navigation.navigate('NovaVacina');
}
  const [search,setSearch] = useState();
  return(
    <View style={{flex:1}}>
      <Header text='Minhas vacinas' navigation={props.navigation}></Header>
      <View style={styles.container}>

       <View style={styles.search}>
        <Image  source={require('../images/icon-search.png')}></Image>
        <TextInput style={styles.input}  placeholder="PESQUISAR VACINA..." keyboardType='default' value={search} onChangeText={setSearch} />
       </View > 
       <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <CardVacina openEdition={goToEditarVacina} vaccineName="Febre Amarela" dose=" Dose única" nextDose="Não há proxima dose" imgProf={require('../images/image-comprovante.png')}/>
        <CardVacina openEdition={goToEditarVacina} vaccineName="Febre Amarela" dose=" 1ª dose"nextDose="Proxima dose 12/12/2028" imgProf={require('../images/image-comprovante.png')}/>
        

       </View>
       <TouchableOpacity  style={[styles.button]} onPress={goToNovaVacina}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
     
        
       

      </View>
      
      
    
    </View>
  )


}
const styles = StyleSheet.create({
  buttonText:{
    fontSize:20,
    fontFamily:'AveriaLibre-Regular',
    color:'white',
    textAlign:'center',
},
button:{
elevation: 10, 
shadowColor: 'black',
shadowOffset: {width: -2, height: 4},
shadowOpacity: 0.2,
shadowRadius: 3,
backgroundColor:'#49B976',
width:200,
height:40,
alignSelf:'center',
justifyContent:'center',
borderWidth:1,
borderColor:'#37BD6D',
marginVertical:30,



},
  container:{
    backgroundColor:'rgba(173, 212, 208, 1)',
    flex:1,
    alignItems:'flex-start',
    padding:15,
   display:'flex',
   alignContent:'flex-end',
    

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
