import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';

export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='Light-content'/>
        <TextInput placeholder='email' 
                  placeholderTextColor="rgba(255,255,255,0.7)" 
                  returnKeyType='next'
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}/> 
        <TextInput placeholder='password' 
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  secureTextEntry 
                  returnKeyType='go'
                  style={styles.input}
                  ref={(input) => this.passwordInput = input}/> 
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>  
      
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    height: 40,
    width:260,
    backgroundColor: '#07beb8',
    color:'#FFF',
    marginBottom: 10,
    paddingHorizontal:10,
    borderRadius: 5,
  },
  buttonContainer:{
    backgroundColor:'#034643',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText:{
    textAlign: 'center',
    color:'#FFF',
    fontWeight: '500',
  }

});