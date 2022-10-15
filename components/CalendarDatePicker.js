import React, { useState } from 'react';
import { View,Text,StyleSheet,Platform,Button, TouchableOpacity,Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDateStore } from '../store/date';


const CalendarDatePicker =(props)=>{
  const{text,setText}=props;
  const{armazenarData}=useDateStore();
  const [date,setDate]= useState(new Date());
  const [show,setShow]=useState(false);
  const onChange= (event,selectedDate)=>{
    const currentDate = selectedDate|| date;
    setShow(Platform.OS==='ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/' +tempDate.getFullYear();
    setText(fDate);
  }
   const showMode =()=>{
    setShow(true);


   }
    return(
        <View  style={styles.conteiner}>
          
            <TouchableOpacity onPress={()=>showMode(date)} style={styles.component}>
              <Text style={styles.componentText}>{text}</Text>
              <Image source={require('../images/icon.png')}/>
            </TouchableOpacity>
            {show &&(
              <DateTimePicker
               testID='dateTimePicker'
               value={date}
               mode='date'
               display='calendar'
               onChange={onChange}/>
            )}
         
      </View>
    )
}

const styles= StyleSheet.create({
  component:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    
  },
  conteiner:{
    backgroundColor:'white',
    padding:5,
    width:'50%',
    
    

  },
  componentText:{
    fontFamily:'AveriaLibre-Regular',
    color:'rgba(63, 146, 197, 1)',
    fontSize:15,
  


  },

})

export default CalendarDatePicker;