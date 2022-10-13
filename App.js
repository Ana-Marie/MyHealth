
import { NavigationContainer } from '@react-navigation/native';
import{Text,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{createDrawerNavigator}from'@react-navigation/drawer'
import React from 'react';
import Inicial from './screens/Inicial';
import CriarConta from './screens/CriarConta'
import RedefinirSenha from './screens/RedefinirSenha';
import ProximasVacinas from'./screens/ProximasVacinas';
import Home from './screens/Home'
import DrawerMenu from './screens/DrawerMenu';
import { useUserStore } from './store/usuario';
import EditarVacina from './screens/EditarVacina';
import NovaVacina from './screens/NovaVacina';

const Stack= createNativeStackNavigator();
const Drawer= createDrawerNavigator()

const DrawerStack = () => {

  return (
  <Drawer.Navigator 
    screenOptions={{
      headerShown: false
    }}
    drawerContent={(props) => <DrawerMenu {...props} /> }
    >
    <Drawer.Screen name='Minhas Vacinas' component={Home} options={{drawerIcon: () => (<Image source={require('./images/icon-vaccine.png')}/>)}}/>
    <Drawer.Screen name="Proximas Vacinas" component={ProximasVacinas} options={{drawerIcon: () => (<Image source={require('./images/calendar1.png')}/>)}}/>
    <Drawer.Screen name="EditarVacina" component={EditarVacina}/> 
    <Drawer.Screen name="NovaVacina" component={NovaVacina}/> 

  </Drawer.Navigator>
)
}

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name ='Inicial' component={Inicial}/>
        <Stack.Screen name='CriarConta' component={CriarConta}/>
        <Stack.Screen name='RedefinirSenha' component={RedefinirSenha}/>
        
        {/* <Stack.Screen name="EditarVacinas" component={EditarVacina}/> */}
        {/* <Stack.Screen name="Drawer" component={DrawerStack}/> */}
      </Stack.Navigator>
  )
}
const App = ()=>{
  const { estaLogado } = useUserStore()
  return(
    <NavigationContainer>
      
      
       {estaLogado? <DrawerStack /> : <AuthStack/>}

      

    </NavigationContainer>
  
  
  )


}

export default App;
