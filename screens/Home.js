
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import CardVacina from '../components/CardVacinas';
import Header from '../components/Header';
import GreenButton from '../components/GreenButton';
import { useDispatch, useSelector } from 'react-redux'
import { reducerSetVaccine } from '../redux/vaccineSlice';
import { db } from '../config/firebase'
import { onSnapshot, query, collection,doc } from 'firebase/firestore';
import Geolocation from '@react-native-community/geolocation'
import LoadingSpinner from '../components/LoadingSpinner';
const Home = (props) => {
  const [latitude,setLatitude]= useState();
  const [longitude,setLongitude] = useState();
  const[isLoading,setIsLoading]=useState(true);
 useEffect( ()=>{
    Geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
},[])
  
  const dispatch = useDispatch();
  const userDocID = useSelector((state) => state.user.userID);
  const [vaccineList, setVaccineList] = useState([]);
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
          pathComprovante:vacina.data().pathComprovante,
          latitude:vacina.data().latitude,
          longitude:vacina.data().longitude,
        })
      })
      setVaccineList(listaVacinas)
      setIsLoading(false)
    })
  }, [])

  const goToNovaVacina = () => {

    let initialValues = {
      id:null,
      vaccineName: '',
      vaccinationDate: '',
      dose:null,
      nextVaccination: '',
      comprovante:'empty',
      pathComprovante:null,
      latitude:latitude,
      longitude:longitude,
  }
    dispatch(reducerSetVaccine(initialValues));
    props.navigation.navigate('NovaVacina');
  }
  const [search, setSearch] = useState('');
 /* const searchFilter = () => {
    console.log(search)
    const result = vaccines.filter((vaccine) => vaccine.vaccineName.indexOf(search) > -1)
    console.log(result)
    if (search.length > 0) {
      setVaccineList(result);// isso não está funcionando por que 
    } else {
      setVaccineList(vaccines)
    }
    console.log("RESULT", { result });
    console.log("FILTRO", { vaccineList });
    console.log("QUANTIDADE DE ITENS: ", vaccineList.length);

  }*/

  if(isLoading){
    return(
    <LoadingSpinner msg="carregando..."/>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Header text='Minhas vacinas' navigation={props.navigation}></Header>
      <View style={styles.container}>

        <View style={styles.search}>
          <Image source={require('../images/icon-search.png')}></Image>
          <TextInput style={styles.input} placeholder="PESQUISAR VACINA..." keyboardType='default' value={search} onChangeText={setSearch} />
        </View>

        <View style={{ height: 450, width: '100%', marginVertical: 5, alignContent: 'center' }}>
          {vaccineList.length === 0 ?
            <View>
              <Text style={{ fontFamily: 'AveriaLibre-Regular', color: 'white', fontSize: 24, textAlign: 'center', marginTop: 20, }} >Você ainda não tem nenhuma Vacina Cadastrada </Text>
              <Image style={{ width: '70%', height: '70%', alignSelf: 'center' }} source={require('../images/earth.png')}></Image>

            </View> :
            <FlatList style={{ width: '100%', marginVertical: 5 }}
              data={vaccineList.filter((vaccine)=>vaccine.vaccineName.includes(search))}
              renderItem={({ item }) => <CardVacina navigation={props.navigation} item={item} />} numColumns={2} />
          }

        </View>
        <GreenButton title='Nova Vacina' onPressEvent={()=>{goToNovaVacina()}} />

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
