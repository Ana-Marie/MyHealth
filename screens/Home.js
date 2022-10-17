
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import CardVacina from '../components/CardVacinas';
import Header from '../components/Header';
import GreenButton from '../components/GreenButton';
import { useVacineStore } from '../store/vacinas';
const Home = (props) => {
  const {vaccines} = useVacineStore()
  const [vaccineList,setVaccineList] = useState(vaccines);
  
  const goToNovaVacina = () => {
    props.navigation.navigate('NovaVacina');
  }
  const [search, setSearch] = useState('');
  const searchFilter =()=>{
    console.log(search)
    const result =  vaccines.filter((vaccine)=>vaccine.vaccineName.indexOf(search)>-1)
    console.log(result)
    if(search.length>0){
       setVaccineList(result);// isso não está funcionando por que 
    }else{
       setVaccineList(vaccines)
    }
    console.log("RESULT",{result});
    console.log("FILTRO",{vaccineList});
    console.log("QUANTIDADE DE ITENS: ", vaccineList.length);
  
  } 
  
  


  return (
    <View style={{ flex: 1 }}>
      <Header text='Minhas vacinas' navigation={props.navigation}></Header>
      <View style={styles.container}>

        <View style={styles.search}>
          <Image source={require('../images/icon-search.png')}></Image>
          <TextInput style={styles.input} placeholder="PESQUISAR VACINA..." keyboardType='default' value={search} onChangeText={setSearch}  onEndEditing={searchFilter}/>
        </View>

        <View style={{height:450, width:'100%', marginVertical:5, alignContent:'center'}}>
          {vaccines.length===0?
          <View>
            <Text style={{fontFamily:'AveriaLibre-Regular', color:'white', fontSize:24,textAlign:'center', marginTop:20,}} >Você ainda não tem nenhuma Vacina Cadastrada </Text>
            <Image  style={{width:'70%', height:'70%',alignSelf:'center'}}source={require('../images/earth.png')}></Image>

          </View>:
          <FlatList style={{ width:'100%', marginVertical:5}}
            data={vaccineList}
            renderItem={({ item}) => <CardVacina navigation={props.navigation} item={item} />} numColumns={2} />
          }
    
        </View>
        <GreenButton title='Nova Vacina' onPressEvent={goToNovaVacina} />





      </View>



    </View>
  )


}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(173, 212, 208, 1)',
    flex: 1,
    alignItems: 'flex-start',
    padding: 15,
    display: 'flex',
    alignContent: 'flex-end',


  },
  search: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 28,

  },
  input: {
    color: 'rgba(63, 146, 197, 1)',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    height: 28,
    padding: 0,
    width: 280,
    marginLeft: 5,
  }

})
export default Home;
