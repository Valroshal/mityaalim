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
      <View style={{maxWidth: '375px', width: '100%', padding: '15px'}}>
        <StatusBar barStyle='Light-content'/>
        <View style={{margin: 5}}>
        <TextField
                  placeholder=":דוא''ל"
                  placeholderTextColor="#23a500"
                  keyboardType="email-address"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={onChangeEmail}
                  error={emailError}/>
        
        <TextField
                  placeholder=':סיסמה'
                  placeholderTextColor="#23a500"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={onChangePassword}
                  error={passwordError}
                  secureTextEntry={true}/>
      </View>
      </View>
    );
  }  


const styles = StyleSheet.create({
  
  input:{
    flex: 1,
    borderColor: 'white',
    textAlign: 'right',
    alignSelf: 'stretch',
    height: 50,
    width: "100%",
    backgroundColor: '#fff',
    color:"#23a500",
    borderRadius: 3,
    paddingRight: 10,
    fontFamily: 'OpenSansHebrew-Regular'

  },
});

export default LoginForm;

