
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Header from '../components/Header';
import NextVaccineCard from '../components/NextVaccineCard';
import { useSelector } from 'react-redux'
import { db } from '../config/firebase'
import { onSnapshot, query, collection,doc } from 'firebase/firestore';
const App = (props) => {
  
  const[vaccines,setVaccines]=useState([]);
  const userDocID = useSelector((state) => state.user.userID);
  let userDocRef = doc(db, 'users', userDocID);
  const q = query(collection(userDocRef, "vaccines"));
  useEffect(() => {
    onSnapshot(q, (result) => {
      const listaVacinas = []
      result.forEach((vacina) => {
        listaVacinas.push({
          id:vacina.id,
          vaccineName:vacina.data().vaccineName,
          vaccinationDate: vacina.data().vaccinationDate,
          dose: vacina.data().dose,
          nextVaccination: vacina.data().nextVaccination,
          comprovante:vacina.data().comprovante,
          pathComprovante:vacina.data().pathComprovante
        })
      })
      setVaccines(listaVacinas)
    })
  }, [])
  const   filter=( )=>{
    const result = vaccines.filter((item)=>item.nextVaccination!=='');
    return result;

    }

  
  vacinas=filter();
  


  return (
    <View  style={{flex:1}}>
      <Header text='Próximas Vacinas' navigation={props.navigation} />
      <View style={styles.container}>
        <View style={{ height: 480, width: '100%', marginVertical: 5, alignContent: 'center' }}>
          {vaccines.length === 0 ?
            <View>
              <Text style={{ fontFamily: 'AveriaLibre-Regular', color: 'white', fontSize: 24, textAlign: 'center', marginTop: 20, }} >Nada por aqui </Text>
              <Image style={{ width: '70%', height: '70%', alignSelf: 'center' }} source={require('../images/earth.png')}></Image>

            </View> :
            <FlatList style={{ height: 480, width: '100%', marginVertical: 5 }}
              data={vacinas}
              renderItem={({ item}) => <NextVaccineCard navigation={props.navigation} item={item}  />} numColumns={1} />
          }

        </View>

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
});

export default App;
