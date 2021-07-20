import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen.js';
import ItemDetail from './Screens/ItemDetail.js';
import PurchasePage from './Screens/PurchasePage.js';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ItemDetail' headerMode='none'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ItemDetail' component={ItemDetail} />
        <Stack.Screen name='PurchasePage' component={PurchasePage} />
      </Stack.Navigator>
      <StatusBar backgroundColor={'rgba(0,0,0,0)'} barStyle={'dark-content'} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
