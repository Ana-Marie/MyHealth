
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const GreenButton = (props) => {
    const { title, onPressEvent, style } = props;
    return (
        <TouchableOpacity style={[styles.button, { style }]} onPress={onPressEvent}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )


}
const styles = StyleSheet.create({
    button: {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#49B976',
        width: 200,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#37BD6D',
        marginVertical: 30,



    },
    buttonText:{
        fontSize:20,
        fontFamily:'AveriaLibre-Regular',
        color:'white',
        textAlign:'center',
    },
})

export default GreenButton;