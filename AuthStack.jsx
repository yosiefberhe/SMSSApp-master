import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from '../screens/authscreens/AuthScreen';
import LoginScreen from '../screens/authscreens/LoginScreen';
import RegisterationScreen from '../screens/authscreens/RegisterationScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown:false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={RegisterationScreen} />
    </Stack.Navigator>
  );
};