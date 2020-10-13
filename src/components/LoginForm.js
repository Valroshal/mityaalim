import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';
import validate from '../components/validation'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

// need to add error when the field is empty, as on registration screen

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

export default LoginForm;

// constructor(){
  //   super();
  //   global.flag = false;
  //   global.email = '';
  //   global.password = '';
  // }
  
  //   state = {
  //     email: '',
  //     emailError: '',
  //     password: '',
  //     passwordError: '',
  //   }

  //   register() {
  //     const emailError = validate('email', this.state.email)
  //     const passwordError = validate('password', this.state.password)

  //     this.setState({
  //         emailError: emailError,
  //         passwordError: passwordError,
  //       })
    
  //       if (!emailError && !passwordError) {
  //         alert('Details are valid!')
  //       }
  //     }

  //     checkLogin = () =>{
  //       const err = 'Field cannot be empy';
  //       if(this.state.emailError== null && this.state.passwordError== null )
  //       {
  //         global.flag = true;
  //         global.email = this.state.email;
  //         global.password = this.state.password;
  //       }
  //       if(this.state.email == '')
  //       {
  //         this.setState({
  //           emailError: err,
          
  //       })}
  //       if(this.state.password == '')
  //       {
  //         this.setState({
  //           passwordError: err,
  //         })
  //       }
  //       console.log('flag: ', global.flag);
  //     }

  //   handleEmail = async (email) =>{
  //     await this.setState({email});
  //     console.log('email: ', this.state.email);
  //     this.setState({
  //       emailError: validate('email', this.state.email)
  //     });
  //     this.checkLogin();
  //   }

  //   handlePass = async (password) =>{
  //     await this.setState({password});
  //     console.log('pass: ', this.state.password);
  //     this.setState({
  //       passwordError: validate('password', this.state.password)
  //     }); 
  //     this.checkLogin();
  //   }

    
  //   return (
  //     <View style={styles.container}>
  //       <StatusBar barStyle='Light-content'/>
        
  //       <TextField
  //                 placeholder='email'
  //                 placeholderTextColor="rgba(255,255,255,0.7)"
  //                 keyboardType="email-address"
  //                 autoCapitalize='none'
  //                 autoCorrect={false}
  //                 style={styles.input}
  //                 returnKeyType='next'
  //                 onChangeText={this.handleEmail}
  //                 error={this.state.emailError}/>
        
  //       <TextField
  //                 placeholder='password'
  //                 placeholderTextColor="rgba(255,255,255,0.7)"
  //                 autoCapitalize='none'
  //                 autoCorrect={false}
  //                 style={styles.input}
  //                 returnKeyType='next'
  //                 onChangeText={this.handlePass}
  //                 error={this.state.passwordError}
  //                 secureTextEntry={true}/>
  //     </View>
  //   );
  // }  