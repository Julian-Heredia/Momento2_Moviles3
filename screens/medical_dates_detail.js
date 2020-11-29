import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View, Dimensions, Alert } from 'react-native';

function Detail_Date({route, navigation}) {
    const { name, lastname, document, birthday, residence_city, neighborhood, cellphone } = route.params.user;
    const delete_Date = () => {
        // try {
        //     const response = await fetch('/deletedate', {
        //         method: 'DELETE',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             id: id
        //         })
        //     });
        //     const json = await response.json();
        //     Alert.alert("User Deleted Successfully");
        //     navigation.goBack();
        // } catch (error) {
        //     Alert.alert(error);
        // }
    }
    const update_Date = () => {
        // navigation.navigate('Update',{date:route.params.date})
    }
    return (
        <View style={styles.container}>
            <View style={styles.detailCard}>
                <Text>Document: {document}</Text>
                <Text>Name: {name} {lastname}</Text>
                <Text>Birthday: {birthday}</Text>
                <Text>Residence City: {residence_city}</Text>
                <Text>Neighborhood: {neighborhood}</Text>
                <Text>Cellphone: {cellphone}</Text>
                <View style={styles.buttonsView}>
                    <TouchableHighlight style={styles.editButton} onPress={update_Date}>
                        <Text style={styles.textButton}>Edit Date</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.deleteButton} onPress={delete_Date}>
                        <Text style={styles.textButton}>Delete</Text>
                    </TouchableHighlight>                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    detailCard: {
        padding: 5,
        marginTop: 10,
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.9,
    },
    styleCreateButton: {
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center'
    },
    textCreateButton: {
        color: 'white'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editButton: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.4,
    },
    deleteButton: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.4,
    },
    textButton: {
        color: "white"
    }
});

export default Detail_Date;