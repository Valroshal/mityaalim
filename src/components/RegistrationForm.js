import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import {TextField} from 'react-native-material-textfield';

const RegistrationForm = ({
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onChangeRepeatPassword,
  errorName,
  errorEmail,
  errorPassword,
  errorRepeatPassword
}) =>{
    return (
        <View>
          <TextField
            name='name'
            placeholder='name'
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangeName}
            error={errorName}/> 
          <TextField
            name='email'
            placeholder='email'
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="email-address"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangeEmail}
            error={errorEmail}/>
          <TextField
            name='password'
            placeholder='password'
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangePassword}
            error={errorPassword}
            secureTextEntry={true}/>
          <TextField
            name='repeatPassword'
            placeholder='repeat password'
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangeRepeatPassword}
            error={errorRepeatPassword}
            secureTextEntry={true}/>
        </View>
      )
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
