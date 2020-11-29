import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent(props) {
    const { name, lastname, document } = props.date;
    return (
        <View>
            <Text>{document}</Text>
            <Text>{name} {lastname}</Text>
        </View>
    );
};

export default CardComponent;