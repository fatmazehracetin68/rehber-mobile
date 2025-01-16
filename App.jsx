import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewUserScreen from './src/pages/NewUserScreen';
import DetailScreen from './src/pages/DetailScreen';
import UserScreen from './src/pages/UserScreen';
import List from './src/pages/List';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
