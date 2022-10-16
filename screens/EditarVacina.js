
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../components/Header';
import CalendarDatePicker from '../components/CalendarDatePicker';
import Input from '../components/Input';
import RadioGroup from 'react-native-radio-buttons-group';
import GreenButton from '../components/GreenButton';
import { useVacineStore } from '../store/vacinas';


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
const EditarVacina = ({ navigation, route }) => {
 
  const { index } = route.params;
  const { vaccines,updateVaccine } = useVacineStore();
  const vaccine = vaccines[index];

  
  
  
  const changeRadioButtonsValue = () => {
    
    const selected = radioButtonsData.map((option) => {
      
      return {
        id: option.id,
        label: option.label,
        value: option.value,
        labelStyle: {
          color:option.labelStyle.color,
          fontFamily: option.labelStyle.fontFamily,
          fontSize: option.labelStyle.fontSize,
        },
        color: option.color,
        borderColor: option.borderColor,
        size: option.size,
        selected: option.label==vaccine.dose,

      }


    });

    
    return selected;

  }
  const selected = changeRadioButtonsValue();
  const [vaccineName, setVaccineName] = useState(vaccine.vaccineName);
  const [radioButtons, setRadioButtons] = useState(selected);
  const [comprovante, setComprovante] = useState(vaccine.comprovante);
  const [vaccinationDate, setVaccinationDate] = useState(vaccine.vaccinationDate);
  const [nextVaccinationDate, setNextVaccinationDate] = useState(vaccine.nextVaccination);



  
  
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
  const getRadioButtonsValue = ()=>{
  
    const selected = radioButtons.filter((option)=>option.selected);
    return selected[0].label;
  }

  const saveVaccine = () => {

    const vacinaObj = {
      vaccineName: vaccineName,
      vaccinationDate: vaccinationDate,
      dose: getRadioButtonsValue(),
      nextVaccination: nextVaccinationDate,
      comprovante: comprovante,

    }
   
    updateVaccine(vacinaObj,index)
    navigation.navigate('Minhas Vacinas');
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
        <GreenButton title="Salvar alterações" onPressEvent={saveVaccine}></GreenButton>
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

  }


})
export default EditarVacina;
