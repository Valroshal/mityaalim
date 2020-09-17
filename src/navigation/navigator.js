import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import HomeComponent from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegistrationScreen from '../screens/Registration';
import Expo from 'expo';
  
  const Stack = createStackNavigator();
  function RootStack() {
    return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{  headerShown: false }}
          
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
    );

  } 

export default RootStack;
