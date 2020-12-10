import React, { Component } from 'react';
import {StyleSheet, View, StatusBar } from 'react-native';
import {TextField} from 'react-native-material-textfield';

const RegistrationForm = ({
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onChangeRepeatPassword,
  errorName,
  errorEmail,
  errorPassword,
  errorRepeatPassword,
}) =>{
    return (
        <View style={{maxWidth: '375px', width: '100%', padding: '15px'}}>
          <StatusBar barStyle='Light-content'/>
            <View style={{margin: 5}}>
              <TextField
                lineWidth = '0'
                name='name'
                placeholder=':שם'
                placeholderTextColor="#23a500"
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                returnKeyType='next'
                onChangeText={onChangeName}
                error={errorName}/> 
            </View>
            <View style={{margin: 5}}>
              <TextField
                lineWidth = '0'
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
            </View>
            <View style={{margin: 5}}>
              <TextField
                lineWidth = '0'
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
            </View>
            <View style={{margin: 5}}>
              <TextField
                placeholderText='32'
                lineWidth = '0'
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
        </View>
      )
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
        
export default RegistrationForm;
