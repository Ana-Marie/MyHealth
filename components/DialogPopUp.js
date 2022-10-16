
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import React, { useState } from 'react';


const DialogPopUp = (props) => {
    const {setDialogVisible,deleteVaccine} = props;
    const closeDialog=()=>{
        setDialogVisible(false);

    }
   
    return (


        <View  style={{padding: 10, borderRadius:0,borderColor:'rgba(185, 223, 219, 1)',borderWidth:3, width:'80%',height:150, backgroundColor:'white',alignSelf:'center',marginTop:'70%'}}>
            <Text style={styles.text}>Tem ceteza que deseja remover essa vacina?</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity style={[styles.button,styles.sim]} onPress={() => { deleteVaccine()}}>
                    <Text style={styles.buttonText}>SIM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.nao]} onPress={() => {closeDialog(); }}>
                    <Text style={[styles.buttonText]}>CANCELAR</Text>
                </TouchableOpacity>
            </View>

        </View>



    )

}
const styles = StyleSheet.create({
    button: {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 100,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginVertical: 30,



    },
    sim:{
        borderColor:'#FF8383',
        backgroundColor:'#FF8383',
        alignSelf:'flex-start'
    },
    nao:{
        borderColor:'#3F92C5',
        backgroundColor:'#3F92C5',
        alignSelf:'flex-end',

    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        textAlign: 'center',
    },
    text:{
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        color:'#FD7979',

    }
    
})

export default DialogPopUp;