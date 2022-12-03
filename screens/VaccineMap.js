import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Linking, Button } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import MapView, {Marker} from 'react-native-maps';
import Header from '../components/Header';
import LogoHeader from '../components/LogoHeader';
import GreenButton from '../components/GreenButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { reducerSetVaccine } from '../redux/vaccineSlice';


const VaccineMap = (props) => {
    const {screenName}= props.route.params;
  

    const vaccine = useSelector((state) => state.vaccine)
    const dispatch = useDispatch();
    const [latitude, setLatitude] = useState(vaccine.latitude)
    const [longitude, setLongitude] = useState(vaccine.longitude)
    console.log('VaccineMap',vaccine);
    console.log(latitude,longitude);



    const touchOnMap = (e) => {
        setLatitude(e.nativeEvent.coordinate.latitude)
        setLongitude(e.nativeEvent.coordinate.longitude)
    }
    const saveLocation = ()=>{
        console.log('redux ',{vaccine})
        let vacina={
            id:vaccine.id,
            vaccineName: vaccine.vaccineName,
            vaccinationDate: vaccine.vaccinationDate,
            dose: vaccine.dose,
            nextVaccination:vaccine.nextVaccination,
            comprovante: vaccine.comprovante,
            pathComprovante: vaccine.pathComprovante,
            longitude:longitude,
            latitude:latitude,
        }
        console.log('Vacina',{vacina})
        dispatch(reducerSetVaccine(vacina))
        props.navigation.navigate(screenName);
    }

    return (
        <View style={{ flex: 1 }}>
           <LogoHeader/>

            <MapView
                onPress={(e) => touchOnMap(e)}
                loadingEnabled={true}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.010,
                    longitudeDelta: 0.010
                }}
                style={{ flex: 1 }}
            >
                <Marker
                    coordinate={{ latitude: latitude, longitude: longitude }}
                    pinColor={"#55A38B"}
                    title={vaccine.vaccineName}
                    description={"Local de vacinação da vacina: "+vaccine.vaccineName+ ",no dia :" +vaccine. vaccinationDate}
                />
            </MapView>
            <View style={{display:"flex",flexDirection:'row'}}>
                <TouchableOpacity style={{backgroundColor:'rgba(193, 231, 227, 1)',padding:10,width:"30%"}}>
                    <Text style={{color:  '#419ED7',textAlign:'center',fontFamily:'AveriaLibre-Regular',fontSize:20}} onPress={()=>{props.navigation.navigate(screenName)}}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#419ED7',padding:10,width:"70%",borderWidth:2,borderColor:'#419ED7'}} onPress={saveLocation}>
                    <Text style={{color:  'white',textAlign:'center',fontFamily:'AveriaLibre-Regular',fontSize:20}}>Salvar Localização</Text>
                </TouchableOpacity>
          
            </View>
        </View>
    )
}

export default VaccineMap;