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
            placeholder=':שם'
            placeholderTextColor="#23a500"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangeName}
            error={errorName}/> 
          <TextField
            name='email'
            placeholder=":דוא''ל"
            placeholderTextColor="#23a500"
            keyboardType="email-address"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangeEmail}
            error={errorEmail}/>
          <TextField
            name='password'
            placeholder=':סיסמה'
            placeholderTextColor="#23a500"
            placeholderText
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            returnKeyType='next'
            onChangeText={onChangePassword}
            error={errorPassword}
            secureTextEntry={true}/>
          <TextField
            name='repeatPassword'
            placeholder=':אישור סיסמה'
            placeholderTextColor="#23a500"
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
        padding: "5%",
      },
      input:{
        textAlign: 'right',
        alignSelf: 'stretch',
        height: 48,
        width:280,
        backgroundColor: '#fff',
        color:'#FFF',
        borderRadius: 3,
        paddingRight: 10,
      },
      
      // input2:{
      //   height: 40,
      //   width:260,
      //   backgroundColor: '#086008',
      //   color:'#FFF',
      //   marginBottom: 10,
      //   paddingHorizontal:10,
      //   borderRadius: 5,
      //   opacity: 0.8
      // },

      placeholder: {
          fontStyle: 'italic',
          marginLeft: 10
      },

      '&::-webkit-input-placeholder': { color: 'blue' }
    });
        
export default RegistrationForm;
