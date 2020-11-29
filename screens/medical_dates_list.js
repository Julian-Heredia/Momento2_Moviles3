import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import CardComponent from "./CardComponent/card_component";
import { useIsFocused } from "@react-navigation/native";

function List_Dates({ navigation }) {

    const isFocused = useIsFocused();
    const [dates, setDates] = useState([]);

    const getDates = async () => {        
        let response = await fetch('/listdates')
        let json = await response.json();
        setDates(js.dates)
    }

    const detailDate = (item) => {
        navigation.navigate('Dates Detail',{date: item})
    }

    useEffect(() => {
        console.log("isFocused: " + isFocused);
        List_Dates();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.styleCreateButton} onPress={() => navigation.navigate('Dates Assignment')}>
                <Text style={styles.textCreateButton}>Create Date</Text>
            </TouchableHighlight>
            <FlatList
                data={dates}
                renderItem={({ item }) => <TouchableHighlight style={style.listButton} onPress={() => detailDate(item)}>
                    <CardComponent date={item}></CardComponent>
                </TouchableHighlight>}
                keyExtractor={item => item.id}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    styleCreateButton: {
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.9,
    },
    textCreateButton: {
        color: 'white'
    },
    listButton: {
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        marginTop: 10,

    }
});

export default List_Dates;