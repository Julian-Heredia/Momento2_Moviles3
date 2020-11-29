import React from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

function MedicalDateCreate (navigation) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [document, setDcoument] = useState("");
    const [birthday, setBirthday] = useState("");
    const [residence_city, setResidence_City] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [cellphone, setCellphone] = useState("");

    const create_Date =  async () => {
        try {
            if (name=="" && lastname=="" && document=="" && birthday=="" && residence_city=="" && neighborhood=="" && cellphone=="") {
                Alert.alert("You must fill all the fields");
            }
            else if (name == "") {
                Alert.alert("You must enter your name");
            }
            else if (lastname == "") {
                Alert.alert("You must enter your last name");
            }
            else if (document == "") {
                Alert.alert("You must enter your document number");
            }
            else if (isNaN(document)) {
                Alert.alert("Document must be numeric");
            }
            else if (document.length < 5) {
                Alert.alert("The document must be greater than 5 characters");
            }
            else if (birthday == "") {
                Alert.alert("you must enter your birthday");
            }
            else if (residence_city == "") {
                Alert.alert("You must enter your city of residence");
            }
            else if (neighborhood == "") {
                Alert.alert("You must enter your neighborhood where you live");
            }
            else if (cellphone == "") {
                Alert.alert("You must enter your cell phone number");
            }
            else if (cellphone < 10) {
                Alert.alert("the number must have 10 digits");
            }
            else {
            const response = await fetch('/createdate', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    lastname: lastname,
                    document: document,
                    birthday: birthday,
                    residence_city: residence_city,
                    neighborhood: neighborhood,
                    cellphone: cellphone
                })
            });
            const json = await response.json();
            Alert.alert("Date Created Successfully");
            navigation.goBack();
            }
        } catch (error) {
            Alert.alert(error);
        }
    }

    return(      
        <View style={styles.container}>
        <ScrollView>
        <Text style={styles.textStyle}>Name</Text>
        <TextInput style={styles.textInput} onChangeText={text => setName(text)} placeholder="Name"></TextInput>
        <Text style={styles.textStyle}>Last Name</Text>
        <TextInput style={styles.textInput} onChangeText={text => setLastname(text)} placeholder="Last Name"></TextInput>
        <Text style={styles.textStyle}>Document</Text>
        <TextInput style={styles.textInput} onChangeText={text => setDcoument(text)} placeholder="Document"></TextInput>
        <Text style={styles.textStyle}>Birthday</Text>
        <TextInput style={styles.textInput} onChangeText={text => setBirthday(text)} placeholder="Birthday"></TextInput>
        <Text style={styles.textStyle}>Recidence City</Text>
        <TextInput style={styles.textInput} onChangeText={text => setResidence_City(text)} placeholder="Residence City"></TextInput>
        <Text style={styles.textStyle}>Neighborhood</Text>
        <TextInput style={styles.textInput} onChangeText={text => setNeighborhood(text)} placeholder="Neighborhood"></TextInput>
        <Text style={styles.textStyle}>Cellphone</Text>
        <TextInput style={styles.textInput} onChangeText={text => setCellphone(text)} placeholder="Cellphone"></TextInput>
        <TouchableHighlight style={styles.styleCreateButton} onPress={create_Date}>
            <Text style={styles.textCreateButton}>Create Date</Text>
        </TouchableHighlight>
        </ScrollView>
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
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        marginTop: 5,
    },
    styleCreateButton: {
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center',
        marginTop: 23,
        width: Dimensions.get('screen').width * 0.9,
        borderRadius: 5,
    },
    textCreateButton: {
        color: 'white'
    },
    textStyle: {
        marginTop: 10,
        color: 'white'
    }
});

export default MedicalDateCreate;