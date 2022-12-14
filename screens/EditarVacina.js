
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../components/Header';
import CalendarDatePicker from '../components/CalendarDatePicker';
import Input from '../components/Input';
import RadioGroup from 'react-native-radio-buttons-group';
import GreenButton from '../components/GreenButton';
import { useVacineStore } from '../store/vacinas';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import DialogPopUp from '../components/DialogPopUp';
import { useSelector,useDispatch } from 'react-redux';
import { reducerSetVaccine } from '../redux/vaccineSlice';
import { db, storage } from '../config/firebase';
import { onSnapshot, query, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { uploadBytes, ref, deleteObject } from "firebase/storage"
import LoadingSpinner from '../components/LoadingSpinner';


const radioButtonsData = [{
  id: '1',
  label: '1ª dose',
  value: '1ª dose',
  labelStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 12,
  },
  color: 'rgba(65, 158, 215, 1)',
  borderColor: 'white',
  size: 12,
  selected: false,
},
{
  id: '2',
  label: '2ª dose',
  value: '2ª dose',
  labelStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 12,

  },

  color: 'rgba(65, 158, 215, 1)',
  borderColor: 'white',
  size: 12,
  selected: false,
},
{
  id: '3',
  label: '3ª dose',
  value: '3ª dose',
  labelStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 12,
  },

  color: 'rgba(65, 158, 215, 1)',
  borderColor: 'white',
  size: 12,
  selected: false,
},
{
  id: '4',
  label: 'Dose única',
  value: 'Dose única',
  labelStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 12,
  },
  color: 'rgba(65, 158, 215, 1)',
  borderColor: 'white',
  size: 12,
  selected: false,
}]
const EditarVacina = ({ navigation }) => {

  // const { index } = route.params;
  // const { vaccines, updateVaccine, removeVaccine } = useVacineStore();
  // const vaccine = vaccines[index];
  const dispatch=useDispatch();
  const vaccine = useSelector((state) => state.vaccine)
  const userDocID = useSelector((state) => state.user.userID);
  let userDocRef = doc(db, 'users', userDocID);
  const [isDialogVisible, setDialogVisible] = useState(false)
  const[isLoading,setIsLoading]=useState(false);
  const[texto,setTexto]=useState('');
  const changeRadioButtonsValue = () => {
    const selected = radioButtonsData.map((option) => {


      return {
        id: option.id,
        label: option.label,
        value: option.value,
        labelStyle: {
          color: option.labelStyle.color,
          fontFamily: option.labelStyle.fontFamily,
          fontSize: option.labelStyle.fontSize,
        },
        color: option.color,
        borderColor: option.borderColor,
        size: option.size,
        selected: option.label == vaccine.dose,

      }




    });


    return selected;

  }

  if (vaccine) {
    const selected = changeRadioButtonsValue();
    var retorno = {

      vaccineName: vaccine.vaccineName,
      radioButtons: selected,
      comprovante: vaccine.comprovante,
      vaccinationDate: vaccine.vaccinationDate,
      nextVaccinationDate: vaccine.nextVaccination,

    }
  } else {
    var retorno = {
      vaccineName: '',
      radioButtons: radioButtonsData,
      comprovante: 'empty',
      vaccinationDate: '',
      nextVaccinationDate: '',

    }
  }








  const [vaccineName, setVaccineName] = useState(retorno.vaccineName);
  const [radioButtons, setRadioButtons] = useState(retorno.radioButtons);
  const [comprovante, setComprovante] = useState(retorno.comprovante);
  const [vaccinationDate, setVaccinationDate] = useState(retorno.vaccinationDate);
  const [nextVaccinationDate, setNextVaccinationDate] = useState(retorno.nextVaccinationDate);


  const getLocation =   () => {
    console.log('getLocation',{vaccine})
    let vacina = {
      id:vaccine.id,
      vaccineName: vaccineName,
      vaccinationDate: vaccinationDate,
      dose:getRadioButtonsValue(),
      nextVaccination: nextVaccinationDate,
      comprovante: comprovante,
      pathComprovante: vaccine.pathComprovante,
      latitude:vaccine.latitude,
      longitude:vaccine.longitude

    }
    dispatch(reducerSetVaccine(vacina))
    navigation.navigate('Mapa Vacinas',{screenName:'EditarVacina'});
    
  }






  const deleteVaccine = () => {
    setTexto('Excluindo Vacina...')
    setIsLoading(true);

    deleteObject(ref(storage, vaccine.pathComprovante)).then(() => {
      deleteDoc(doc(userDocRef, "vaccines", vaccine.id))
        .then(() => {
          console.log('Vacina excluida com sucesso!')
          setIsLoading(false);
          setDialogVisible(false);
          navigation.goBack();
        })
        .catch((error) => {
          setIsLoading(false);
          alert(error)
        })

    })



  }



  const openDialog = () => {

    setDialogVisible(true);
  }

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  }

  const pickImageGalery = async () => {
    const options = {
      mediaType: 'photo'
    }
    const result = await launchImageLibrary(options)
    if (result?.assets) {
      setComprovante(result.assets[0].uri);
      return;
    }

  }
  const getRadioButtonsValue = () => {

    const selected = radioButtons.filter((option) => option.selected);
    return selected[0].label;
  }

  const saveVaccine = async () => {
    setTexto('Atualizando Vacina...')
    setIsLoading(true);

    
    // console.log({ vacinaObj });
    //updateVaccine(vacinaObj, index)
    const data = await fetch(comprovante)
    const blob = await data.blob()
    console.log(vaccine.pathComprovante);
    uploadBytes(ref(storage,vaccine.pathComprovante), blob)
      .then((result) => {
        console.log(result);
        const vacinaObj = {
         // id:vaccine.id,
          vaccineName: vaccineName,
          vaccinationDate: vaccinationDate,
          dose: getRadioButtonsValue(),
          nextVaccination: nextVaccinationDate,
          comprovante: comprovante,
          pathComprovante:vaccine.pathComprovante,
          longitude:vaccine.latitude,
          latitude:vaccine.longitude,
          
    
    
        }
        updateDoc(doc(userDocRef, "vaccines", vaccine.id), vacinaObj)
          .then((result) => {
            setIsLoading(false);
            alert('Vacina Atualizada com sucesso!');

            navigation.goBack();
          })
          .catch((error) => {
            setIsLoading(false);
            alert('Erro atualizar dados:'+error)
          })
      }).catch((error) => {
        setIsLoading(false);
        alert('ERRO update comprovante:'+ error);
      })
  }
if(isLoading){
  return(
    <LoadingSpinner msg={texto}/>
  )
}

  return (
    <View style={{ flex: 1 }}>
      <Header text='Minhas vacinas' navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.calendarDatePicker}>
          <Text style={styles.label}>Data de Vacinação</Text>
          <CalendarDatePicker text={vaccinationDate} setText={setVaccinationDate} />
        </View>
        <Input label="Vacina" placeholder="Digite o nome da vacina..." keyboardType='default' value={vaccineName} setText={setVaccineName} hidePassword={false} labelStyle={styles.label} textInputStyle={styles.textInput} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.radioGroupComponentText}>Dose</Text>
          <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} containerStyle={styles.radioGroupComponent} />
        </View>
        <View style={styles.pictureSelector}>
          <Text style={styles.label}> Comprovante</Text>
          <TouchableOpacity style={[styles.selectpicture]} onPress={pickImageGalery}>
            <Text style={styles.label}>Selecionar imagem...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.img}>
          {comprovante == 'empty' ? <Text style={styles.label}>{comprovante}</Text> : <Image source={{ uri: comprovante }} style={{ width: '100%', height: '100%' }} />}
        </View>
        <View style={styles.calendarDatePicker}>
          <Text style={styles.label}>Próxima vacinação</Text>
          <CalendarDatePicker text={nextVaccinationDate} setText={setNextVaccinationDate} />
        </View>
        <TouchableOpacity style={[styles.selectpicture, {padding: 5, width: 200, alignSelf: 'center', marginTop: 10}]} onPress={getLocation}>
            <Text style={styles.label}>Capturar localização</Text>
        </TouchableOpacity>
        <GreenButton title="Salvar alterações" onPressEvent={saveVaccine}></GreenButton>

        <TouchableOpacity style={[styles.button,{bottom:30}]} onPress={openDialog}>
          <Image style={{ alignSelf: 'center', width: 22, height: 22 }} source={require('../images/trash.png')}></Image>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
        <Modal
          style={{ justifyContent: 'center', alignItems: 'center' }}
          visible={isDialogVisible}
          transparent={true}
          animationType='fade'
          onRequestClose={() => {
            setDialogVisible(false);
          }}>

          <DialogPopUp setDialogVisible={setDialogVisible} deleteVaccine={deleteVaccine} />

        </Modal>

      </View>


    </View>
  )

}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(173, 212, 208, 1)',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    display: 'flex',



  },
  calendarDatePicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,


  },
  label: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
    marginRight: 5,
    alignSelf: 'center',
    justifyContent: 'flex-end',

  },
  textInput: {
    color: 'rgba(63, 146, 197, 1)',
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14,
    height: 35,
    width: 200,



  },
  radioGroupComponent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '75%',
    padding: 0,
    margin: 0,





  },
  radioGroupComponentText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14,
  },
  selectpicture: {
    backgroundColor: '#419ED7',
    width: 150,
    height: 30,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#419ED7',
    marginTop: 0,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: 'flex-end',


  },
  pictureSelector: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',

  },
  img: {
    backgroundColor: 'gray',
    width: 200,
    height: 150,
    display: 'flex',
    marginVertical: 5,
    alignSelf: 'flex-end'

  },
  button: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#FD7979',
    width: 120,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FD7979',
    marginVertical: 30,
    flexDirection: 'row',



  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    alignSelf: 'center',

  },



})
export default EditarVacina;
