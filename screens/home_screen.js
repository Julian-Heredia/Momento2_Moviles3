import React from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, Image, } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import MedicalDateCreate from '../screens/medical_dates_create'

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/doctor.png')} style={styles.ImageIconStyle}
            />
            <Text style={styles.textStyles}>Medical Dates Software</Text>
            <TouchableHighlight style={styles.styleButtons} onPress={() => navigation.navigate('Dates Assignment')}>
                <Text style={styles.textCreateButton}>Medical Date Assignment</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.styleButtons} onPress={() => navigation.navigate('Dates List')}>
                <Text style={styles.textCreateButton}>Medical Dates Registered</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40c4ff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        marginTop: 10,
    },
    styleButtons: {
        backgroundColor: 'lightblue',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9,
        borderRadius: 5,
    },
    textCreateButton: {
        color: 'white',
        fontSize: 14
    },
    ImageIconStyle: {
        marginTop: 30,
        justifyContent: "center",
        padding: 20,
        flexDirection: "row",
        borderRadius: 10,
        width: 70,
        height: 70,
      },
      textStyles: {
          fontSize: 30,
          color: 'white'
      }
});


export default HomeScreen;