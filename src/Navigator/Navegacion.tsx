import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {ingreso} from '../screens/ingreso';
import {list} from '../screens/list';
import React from 'react';
const Stack = createStackNavigator();

export const Navegacion=()=> {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ingreso" component={ingreso} />
      <Stack.Screen name="list" component={list} />
    </Stack.Navigator>
  );
}