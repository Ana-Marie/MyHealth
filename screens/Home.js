
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import CardVacina from '../components/CardVacinas';
import Header from '../components/Header';
import GreenButton from '../components/GreenButton';
import useVacineStore from '../store/vacinas';
const Home = (props) => {
  const goToEditarVacina = () => {
    props.navigation.navigate('EditarVacina');

  }
  const goToNovaVacina = () => {
    props.navigation.navigate('NovaVacina');
  }
  const { arrayVacinas} = useVacineStore
  const [search, setSearch] = useState();
  return (
    <View style={{ flex: 1 }}>
      <Header text='Minhas vacinas' navigation={props.navigation}></Header>
      <View style={styles.container}>

        <View style={styles.search}>
          <Image source={require('../images/icon-search.png')}></Image>
          <TextInput style={styles.input} placeholder="PESQUISAR VACINA..." keyboardType='default' value={search} onChangeText={setSearch} />
        </View >
      
        <View>
       {/*<FlatList
                data={arrayVacinas}
                renderItem={({item}) => <CardVacina openEdition={goToEditarVacina} item={item}  />} numColumns={2}/>

  */} 
          <CardVacina openEdition={goToEditarVacina} vaccineName="Febre Amarela" dose=" Dose única" nextDose="Não há proxima dose" imgProf={require('../images/image-comprovante.png')} />
          <CardVacina openEdition={goToEditarVacina} vaccineName="Febre Amarela" dose=" 1ª dose" nextDose="Proxima dose 12/12/2028" imgProf={require('../images/image-comprovante.png')} />
        </View>
        <GreenButton title='Nova Vacina' onPressEvent={goToNovaVacina}/>





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
