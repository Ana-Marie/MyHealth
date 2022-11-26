
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LogoHeader from '../components/LogoHeader';
import Input from '../components/Input';
import RadioGroup from 'react-native-radio-buttons-group';
import CalendarDatePicker from '../components/CalendarDatePicker';
import GreenButton from '../components/GreenButton';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../config/firebase';
import { addDoc, collection, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"



const radioButtonsData = [{
  id: '1',
  label: 'Masculino',
  value: 'Masculino',
  labelStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },

  color: 'rgba(65, 158, 215, 1)',
  borderColor: 'white',
  size: 20,
},
{
  id: '2',
  label: 'Feminino',
  value: 'Feminino',
  labelStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },

  color: 'rgba(65, 158, 215, 1)',
  borderColor: 'white',
  size: 20,
}]
const CriarConta = (props) => {


  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [DataNasc,setDataNasc] = useState();


  const criarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredencial) => {
      console.log("Usuario adicionado com  sucessso!")
      const{uid} = userCredencial.user;
      console.log(uid);
      cadastrar(uid);
      goToInicial();

      


    }).catch((error) => {
      console.log("Ocorreu um erro ao cadastrar usuário")
      console.log("Erro: " + error.message)
    })
  }
  
  const cadastrar = (userUID)=>{
    addDoc(collection(db,"users"),{
      fullName: fullName,
      DataNasc: DataNasc,
      sexo:getRadioButtonsValue(),
      userUID: userUID,

    }).then((result)=>{
      console.log('Usuário Cadastrado com sucesso!');
    }).catch((error)=>{
      alert(error);
    })
  }
  const getRadioButtonsValue = ()=>{
    const selected = radioButtons.filter((option)=>option.selected);
    return selected[0].label;
  }



  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  }
  const isPasswordsEquals = () => {
    if (password != repeatPassword) {
      return false;
    }
    else {
      return true;
    }
  }
  const goToInicial = () => {
    props.navigation.pop();

  }

  





  return (
    <View style={styles.screen}>
      <LogoHeader></LogoHeader>
      <View style={styles.container}>
        <View style={styles.form}>
          <Input label="Nome Completo" placeholder="Digite o seu nome completo..." keyboardType='default' value={fullName} setText={setFullName} hidePassword={false} labelStyle={styles.label} textInputStyle={styles.textInput} />
          <View style={styles.radioGroupComponent}>
            <Text style={styles.radioGroupComponentText}>Sexo</Text>
            <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout='row' />
          </View>
          <View style={styles.calendarDatePicker}>
            <Text style={styles.label}>Data de Nascimento</Text>
            <CalendarDatePicker text={DataNasc} setText={setDataNasc} />
          </View>

          <Input label="Email" placeholder="Digite o seu email..." keyboardType='email-address' value={email} setText={setEmail} hidePassword={false} labelStyle={styles.label} textInputStyle={styles.textInput} />
          <Input label="Senha" placeholder="Digite a sua senha..." keyboardType='default' value={password} setText={setPassword} hidePassword={true} labelStyle={styles.label} textInputStyle={styles.textInput} />
          <View>
            <Input label="Repita a senha" placeholder="Digite a sua senha..." keyboardType='default' value={repeatPassword} setText={setRepeatPassword} hidePassword={true} labelStyle={styles.label} textInputStyle={styles.textInput} />

          </View>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <GreenButton title="Cadastrar" onPressEvent={criarUsuario} />
        </View>

      </View>



    </View>
  )


}
const styles = StyleSheet.create({
  form: {
    marginTop: 20,


  },
  errorMsg: {
    color: 'rgba(253, 121, 121, 1)',
    fontFamily: 'AveriaLibre-Regular',
    marginLeft: '40%',
    fontSize: 15,


  },
  calendarDatePicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,


  },

  radioGroupComponent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
  radioGroupComponentText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14,



  },
  radioGroupStyle: {
    color: 'white',

  },
  container: {
    backgroundColor: 'rgba(173, 212, 208, 1)',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',

  },
  screen: {
    flex: 1,
  },
  textInput: {
    color: 'rgba(63, 146, 197, 1)',
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14,
    height: 35,
    width: 200,



  },
  label: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
    marginRight: 5,
    alignSelf: 'center',
    justifyContent: 'flex-end',

  },


})

export default CriarConta;
