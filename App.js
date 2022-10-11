
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{createDrawerNavigator}from'@react-navigation/drawer'
import React from 'react';
import Home from './screens/Home';
import Inicial from './screens/Inicial';
import CriarConta from './screens/CriarConta'
import RedefinirSenha from './screens/RedefinirSenha';
import ProximasVacinas from'./screens/ProximasVacinas';

const Stack= createNativeStackNavigator();
const Drawer = createDrawerNavigator()
const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name ='Inicial' component={Inicial}/>
        <Stack.Screen name='CriarConta' component={CriarConta}/>
        <Stack.Screen name='RedefinirSenha' component={RedefinirSenha}/>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Proximas Vacinas" component={ProximasVacinas} />
      </Stack.Navigator>
     
       
      

    </NavigationContainer>
  
  
  )


}

export default App;
