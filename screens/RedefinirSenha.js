import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Input';
import LogoHeader from '../components/LogoHeader';
const RedefinirSenha= (props)=>{
   
    const redefinePassword=()=>{
        showAlert();
        props.navigation.pop();

    }
 const [email,setEmail]=useState();
 const showAlert=()=>{
    Alert.alert(''+
     'Instruções enviadas para o email: '+email)
}

  return(
    <View style={styles.screen} >
        <LogoHeader/>
        <View style={styles.container}>
            
            <Input  label="Email" placeholder="Digite o seu email..." keyboardType='email-address' value={email}  setText={setEmail}hidePassword={false}  labelStyle={styles.label} textInputStyle={styles.textInput}/>
            <TouchableOpacity  style={[styles.button]} onPress={redefinePassword}>
                <Text style={styles.buttonText}>Recuperar Senha</Text>
            </TouchableOpacity>
        </View>
    </View>
  )


}
const styles = StyleSheet.create({
    buttonText:{
        fontSize:20,
        fontFamily:'AveriaLibre-Regular',
        color:'white',
        textAlign:'center',
    },
    button:{
    elevation: 10, 
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#49B976',
    width:200,
    height:40,
    alignSelf:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#37BD6D',
    marginVertical:30,
    
    

    },
    container:{
        backgroundColor:'rgba(173, 212, 208, 1)',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        padding:15,
        flexDirection:'column',
        justifyContent:'space-evenly',

    },
    screen:{
        flex:1,
    },
    textInput:{
        color:'rgba(63, 146, 197, 1)',
        backgroundColor:'white',
        fontFamily:'AveriaLibre-Regular',
        fontSize:16,
        height:40,
        width:'80%',
        
    
    },
    label:{
        color:  'white',
        fontSize:16,
        fontFamily:'AveriaLibre-Regular',
        marginRight:5,
        alignSelf:'center',
        justifyContent:'flex-end',
    
    
       
    },
})  

export default RedefinirSenha;
