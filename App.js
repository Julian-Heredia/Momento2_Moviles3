//#region Imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "./screens/home_screen"
import MedicalDateCreate from './screens/medical_dates_create'
import DateList from './screens/medical_dates_list'
import DateDetail from './screens/medical_dates_detail'
import DateUpdate from './screens/medical_dates_update'
//#endregion

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Dates Assignment" component={MedicalDateCreate}/>
        <Stack.Screen name="Dates List" component={DateList}/>
        <Stack.Screen name="Dates Detail" component={DateDetail}/>
        <Stack.Screen name="Dates Update" component={DateUpdate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;