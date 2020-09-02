import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import HomeComponent from './src/screens/Home'
import LoginComponent from './src/screens/Login'
import Expo from 'expo';
const id = "918095505346162";

export default class App extends React.Component {

  
  render(){
    return (
      <View style={styles.container}>
        <LoginComponent/>
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
