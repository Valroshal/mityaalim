import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';

import {TextField} from 'react-native-material-textfield';

const LoginForm = ({
  onChangeEmail,
  onChangePassword,
  emailError,
  passwordError

}) => {
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle='Light-content'/>
        
        <TextField
                  placeholder='email'
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  keyboardType="email-address"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={onChangeEmail}
                  error={emailError}/>
        
        <TextField
                  placeholder='password'
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={onChangePassword}
                  error={passwordError}
                  secureTextEntry={true}/>
      </View>
    );
  }  


const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    height: 40,
    //width:260,
    backgroundColor: '#22aa22', //'#07beb8',
    opacity: 0.8,
    color:'#FFF',
    marginBottom: 10,
    paddingHorizontal:10,
    borderRadius: 5,
  },
});

export default LoginForm;

