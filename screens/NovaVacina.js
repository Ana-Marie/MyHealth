
import React, { useState,useEffect } from 'react';
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
  selected:false,
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
  selected:false,
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
  selected:false,
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
  selected:false,
}]




const NovaVacina = (props) => {
  const [vaccineName, setVaccineName] = useState();
  const [comprovante, setComprovante] = useState('empty');
  const [vaccinationDate, setVaccinationDate] = useState('');
  const [nextVaccinationDate, setNextVaccinationDate] = useState('');
  const {addVaccine,vaccines } = useVacineStore();
  const resetRadioButtonsValue = () => {
    
    const reseted = radioButtonsData.map((option) => {
      
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
        selected: false,
        
      }
      
      
    });
    
    
    return reseted;
    
  }
  const resetedRadiButton = resetRadioButtonsValue();
  const [radioButtons, setRadioButtons] = useState(resetedRadiButton);
  
  
  
 
  
  
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
    
      addVaccine(vacinaObj);
    
    props.navigation.navigate('Minhas Vacinas');
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
  

  return (
    <View style={{ flex: 1 }}>
      <Header text='Minhas vacinas' navigation={props.navigation} />
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
          {comprovante == 'empty' ? <View style={{ height:'100%'}}>
          <Text style={{fontFamily:'AveriaLibre-Regular', color:'gray', fontSize:16,textAlign:'center', marginTop:5,}} >Faça upload do comprovante</Text>
            <Image  style={{width:'45%',height:'60%',alignSelf:'center',marginTop:10,opacity:0.2}}source={require('../images/upload-arrow.png')}></Image>



          </View>
          :
           <Image source={{ uri: comprovante }} style={{ width: '100%', height: '100%' }} />}
        </View>
        <View style={styles.calendarDatePicker}>
          <Text style={styles.label}>Próxima vacinação</Text>
          <CalendarDatePicker text={nextVaccinationDate} setText={setNextVaccinationDate} />
        </View>
        <GreenButton title="Cadastrar" onPressEvent={saveVaccine}></GreenButton>
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
    backgroundColor:'#e8e5e3',
    width: 200,
    height: 150,
    display: 'flex',
    marginVertical: 5,
    alignSelf: 'flex-end',
    borderRadius:5,
    

  }


})
export default NovaVacina;