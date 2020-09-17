import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';

class RegistrationForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='Light-content'/>
        <TextInput placeholder='full name' 
                  placeholderTextColor="rgba(255,255,255,0.7)" 
                  returnKeyType='next'
                  onSubmitEditing={() => this.emailInput.focus()}
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}/> 
        <TextInput placeholder='email' 
                  placeholderTextColor="rgba(255,255,255,0.7)" 
                  returnKeyType='next'
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  ref={(input) => this.emailInput = input}/>
        <TextInput placeholder='password' 
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  secureTextEntry 
                  returnKeyType='next'
                  onSubmitEditing={() => this.password2Input.focus()}
                  style={styles.input}
                  ref={(input) => this.passwordInput = input}/> 
        <TextInput placeholder='repeat password'
                  contextMenuHidden={true} 
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  secureTextEntry 
                  returnKeyType='go'
                  style={styles.input}
                  ref={(input) => this.password2Input = input}/>          
      
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

});

export default RegistrationForm;