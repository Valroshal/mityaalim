import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Button } from 'react-native';
import validate from '../components/validation'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

class RegistrationForm extends React.Component{

    constructor(){
      super();
      global.status = false;
      global.regName = '';
      global.regEmail = '';
      global.regPass = '';
      global.repregPass = '';
    }
    
      state = {
        name:'',
        nameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        repeatPassword: '',
        repeatPasswordError: '',
      }

      register() {
        const nameError = validate('name', this.state.name)
        const emailError = validate('email', this.state.email)
        const passwordError = validate('password', this.state.password)
        const repeatPasswordError = validate('repeatPassword', this.state.repeatPassword)

        this.setState({
            nameError: nameError,
            emailError: emailError,
            passwordError: passwordError,
            repeatPasswordError: repeatPasswordError,

          })
      
          if (!emailError && !passwordError) {
            alert('Details are valid!')
          }
        }

        handleName = async (name) =>{
          await this.setState({name});
          global.regName = this.state.name;
          await console.log('name: ', this.state.name);
          //console.log('global name: ', global.regName);
          await this.setState({
            nameError: validate('name', this.state.name)
          })
          
          this.setGlobalStatus();
          //console.log(global.status)
        }

        handleEmail = async (email) =>{
          await this.setState({email});
          global.regEmail = this.state.email;
          await console.log('email: ', this.state.email);
          this.setState({
            emailError: validate('email', this.state.email)
          })
          
          this.setGlobalStatus();
          //console.log(global.status)
        }

        handlePass = async (password) =>{
          await this.setState({password});
          global.regPass = this.state.password;
          await console.log('pass: ', this.state.password);
          this.setState({
            passwordError: validate('password', this.state.password)
          })
          //console.log('errors: ', this.state.nameError, this.state.emailError, this.state.passwordError)
          
          this.handleConfirmPass();
          //console.log(global.status)
        }

        handleConfirmPass = async (repeatPassword) =>{
          
          await this.setState({repeatPassword});
          global.repregPass = this.state.repeatPassword;
          if(this.state.repeatPassword == null)
          {
            await this.setState({
              repeatPasswordError: 'not matched'
            })
          }
            
          if(global.regPass != global.repregPass)
          {
            await this.setState({
              repeatPasswordError: 'not matched'
            })
          }
          else 
          {
            await this.setState({
              repeatPasswordError: ''
            })
            await this.setGlobalStatus();
          }
          //console.log('rep pass: ' ,this.state.repeatPassword)
          //console.log('pass: ' ,this.state.password)
          await this.setGlobalStatus();
          //console.log(global.status)
        }

        setGlobalStatus = () =>{
          const err = 'Field cannot be empy';
          if(this.state.nameError == null && this.state.emailError == null && this.state.passwordError == null
            && this.state.name!= null && this.state.email!= null && this.state.password!= null && this.state.repeatPassword!= null)
          {
              global.status = true;
          }
          
          else if(this.state.name== ''){
                this.setState({
                  nameError: err
                })
              }
          else if(this.state.email== ''){
                this.setState({
                  emailError: err
                })
              }
          else if(this.state.password==''){
                this.setState({
                  passwordError: err
                })
              }
          else
          {

          }
        }

        render() {
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
                  onChangeText={this.handleName}
                  
                  error={this.state.nameError}/> 

                <TextField
                  name='email'
                  placeholder='email'
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  keyboardType="email-address"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={this.handleEmail}
                  
                  error={this.state.emailError}/>
        
                <TextField
                  name='password'
                  placeholder='password'
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={this.handlePass}
                  
                  error={this.state.passwordError}
                  secureTextEntry={true}/>

                <TextField
                  name='repeatPassword'
                  placeholder='repeat password'
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={this.handleConfirmPass}
                  error={this.state.repeatPasswordError}
                  secureTextEntry={true}/>
              </View>
            )
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
