
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import NextVaccineCard from '../components/NextVaccineCard';
const App = (props) => {
  return (
    <View>
      <Header text='Próximas Vacinas' navigation={props.navigation} />
      <View>
        <NextVaccineCard />

      </View>
    </View>
  )


}

export default App;
