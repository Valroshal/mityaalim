import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import HomeComponent from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import RegistrationScreen from './src/screens/Registration';
import Expo from 'expo';
import  MyStack from './src/navigation/navigator'


export default class App extends React.Component {

  
  
  render(){
    
    return (
      <View style={styles.container}>
        <MyStack/>
        <StatusBar style="auto" />
      </View>
    );

  }
}

//need camelCase in style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ceffee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff',
    fontSize: 26
  }
});
