import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";

function Update_Date(route, navigation) {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [document, setDcoument] = useState("");
    const [birthday, setBirthday] = useState("");
    const [residence_city, setResidence_City] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [cellphone, setCellphone] = useState("");

    const update_Date = async () => {
        try {
            const response = await fetch('/updatedate', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: route.params.date.id,
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
            Alert.alert("Date Updated Successfully");
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert(error);
        }
    }
    useEffect(() => {
        setName(route.params.date.name);
        setLastname(route.params.date.lastname);
        setDcoument(route.params.date.document);
        setBirthday(route.params.date.birthday);
        setResidence_City(route.params.date.residence_city);
        setNeighborhood(route.params.date.neighborhood);
        setCellphone(route.params.date.cellphone);
    },[])
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value={name} onChangeText = {text => setName(text)} placeholder="name"></TextInput>
            <TextInput style={styles.textInput} value={lastname} onChangeText = {text => setLastname(text)} placeholder="lastname"></TextInput>
            <TextInput style={styles.textInput} value={document} onChangeText = {text => setDcoument(text)} placeholder="document"></TextInput>          
            <TextInput style={styles.textInput} value={birthday} onChangeText = {text => setBirthday(text)} placeholder="birthday"></TextInput>
            <TextInput style={styles.textInput} value={residence_city} onChangeText = {text => setResidence_City(text)} placeholder="residence_city"></TextInput>            
            <TextInput style={styles.textInput} value={neighborhood} onChangeText = {text => setNeighborhood(text)} placeholder="neighborhood"></TextInput>
            <TextInput style={styles.textInput}  value={cellphone} onChangeText = {text => setCellphone(text)} placeholder="cellphone"></TextInput>
            <TouchableHighlight style={style.styleCreateButton} onPress={update_Date}>
                <Text style={styles.textCreateButton}>Update User</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    styleCreateButton: {
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9,
        borderRadius: 5,
    },
    textCreateButton: {
        color: 'white'
    },
});

export default Update_Date;