
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';
import { useUserStore } from '../store/usuario';
import GreenButton from '../components/GreenButton';


const Inicial = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { fazerLogin } = useUserStore()

  const goToHome = () => {
    fazerLogin() // chama a funçâo de fazer login dentro do useUserStore
  }
  const goToCriarConta = () => {
    props.navigation.push('CriarConta');
  }
  const goToRedefinirSenha = () => {
    props.navigation.push('RedefinirSenha');

  }

  return (

    <ImageBackground source={require('../images/Background_Inicial.jpg')} style={styles.background}>
      <LinearGradient colors={['rgba(84, 131, 126, 0.2) ', ' rgba(255, 255, 255, 0.62)', 'rgba(221, 230, 229, 0.68)', 'rgba(59, 94, 90, 0.51)']} start={{ x: 150, y: 512 }} end={{ x: 450, y: 512 }} style={styles.overlay}>
        <View style={[styles.logo]} >
          <Image source={require('../images/icon-vaccine.png')} />
          <Text style={styles.logoTexto}>MyHealth</Text>
        </View>
        <Text style={styles.texto}> Controle as suas vacinas e fique seguro</Text>
        <View style={styles.form}>
          <Input label="Email" placeholder="Digite o seu email..." keyboardType='email-address' value={email} setText={setEmail} hidePassword={false} labelStyle={styles.label} textInputStyle={styles.textInput} />
          <Input label="Senha" placeholder="Digite a sua senha..." keyboardType='default' value={password} setText={setPassword} hidePassword={true} labelStyle={styles.label} textInputStyle={styles.textInput} />
          <Text style={styles.errorMsg}>E-mail e/ou senha inválidos</Text>
          <GreenButton title="Entrar" onPressEvent={goToHome} />

        </View>
        <TouchableOpacity style={[styles.createAcount, styles.shadowProp, styles.elevation]} onPress={goToCriarConta}>
          <Text style={styles.buttonText}>Criar minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={[styles.forgotPas,styles.shadowProp,styles.elevation]} onPress={goToRedefinirSenha}>
            <Text style={styles.buttonText}>esqueci minha senha</Text>
          </TouchableOpacity>

      </LinearGradient>
    </ImageBackground>

  )


}

const styles = StyleSheet.create({
  textInput: {
    color: 'rgba(63, 146, 197, 1)',
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    height: 40,
    width: '80%',


  },
  label: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    marginRight: 5,
    alignSelf: 'center',
    justifyContent: 'flex-end',



  },
  errorMsg: {
    color: 'rgba(253, 121, 121, 1)',
    fontFamily: 'AveriaLibre-Regular',
    marginLeft: '20%',
    fontSize: 15,

  },
  form: {
    display: 'flex',
    marginVertical: 30,
    width: '100%',




  },
  forgotPas: {
    backgroundColor: '#B5C7D1',
    width: 200,
    marginTop: 20,
    alignSelf: 'center',


  },
  createAcount: {
    backgroundColor: '#419ED7',
    width: 200,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#419ED7',
    marginVertical: 30,
    marginTop: 0,

  },

  enter: {

    backgroundColor: '#49B976',
    width: 120,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#37BD6D',
    marginVertical: 30,



  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 10,
    shadowColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    textAlign: 'center',


  },
  overlay: {
    backgroundColor: 'rgba(221, 230, 229, 0.85)',
    flex: 1,
    paddingRight: 15,
    paddingLeft: 20,

  },

  container: {
    flex: 1,
    BackgroundColor: '#FFFFFF',





  },
  background: {
    flex: 1,
    resizeMode: "cover",






  },
  logo: {

    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 60,

  }, logoTexto: {
    fontStyle: "normal",
    fontSize: 55,
    lineHeight: 60,
    textDecorationLine: 'underline',
    color: '#419ED7',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',



  },
  texto: {

    fontSize: 29,
    lineHeight: 33,
    color: '#419ED7',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',

  },


})

export default Inicial;
