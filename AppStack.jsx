
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmployerHomeScreen from '../screens/employerscreens/EmployerHomeScreen';
const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={EmployerHomeScreen} />
    </Stack.Navigator>
  );
};