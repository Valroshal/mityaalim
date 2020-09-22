import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Button } from 'react-native';
//import { Form, TextValidator } from 'react-native-validator-form';
import validate from '../components/validation'
//import {validation} from 'validation'
//import validate from 'validation_wrapper'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

class RegistrationForm extends React.Component{

    constructor(){
      super();
      global.status = false;
    }
    
        state = {
          email: '',
          emailError: '',
          password: '',
          passwordError: ''
        }

      register() {
        const emailError = validate('email', this.state.email)
        const passwordError = validate('password', this.state.password)
    
        this.setState({
            emailError: emailError,
            passwordError: passwordError
          })
      
          if (!emailError && !passwordError) {
            alert('Details are valid!')
          }
        }

        handleEmail = (email) =>{
            this.setState({email});
            this.setState({
              emailError: validate('email', this.state.email)
            })
            //console.log(this.state.emailError)
        }

        handlePass = (password) =>{
          this.setState({password});
          this.setState({
            passwordError: validate('password', this.state.password)
          })
          //console.log(this.state.passwordError)
            if(this.state.emailError == null && this.state.passwordError == null)
            {
              global.status = true;
            }
          console.log(global.status)
        }

        // handleEmailErr = () =>{
        //     this.setState({
        //     emailError: validate('email', this.state.email)
        //   })
        //   console.log(this.state.emailError)
        //   if(this.state.emailError == null)
        //   {
        //     global.status = true;
        //   }
        //   console.log(global.status)
        // }

        // handlePass = (password) =>{
        //     this.setState({password});
        // }

      
        render() {
            //const { email } = this.state;
            //const { password } = this.state;
            return (
              <View>
                <TextField
                  
                  onChangeText={this.handleEmail}
                  // onBlur={() => {
                  //   this.setState({
                  //     emailError: validate('email', this.state.email)
                  //   })
                    
                  // }}
                  onBlur={this.handleEmail}
                  error={this.state.emailError}/>
        
                <TextField
                  onChangeText={this.handlePass}
                  // onBlur={() => {
                    
                  //   this.setState({
                  //     passwordError: validate('password', this.state.password)
                  //   })
                  // }}
                  onBlur={this.handlePass}
                  error={this.state.passwordError}
                  secureTextEntry={true}/>
              </View>
            )
          }
        }
    
      
export default RegistrationForm;



// ifValidState = () =>{
        
    //     while(email!= null && name!=null && user.password!=null && user.repeatPassword!=null){
    //         if(
                
    //             this.email.match(/\S+@\S+\.\S+/) &&
    //             name.length > 2 && name.length < 21 && name.match(/^[A-Za-z]+$/) &&
    //             user.password.length > 5 && user.password.match(/^[0-9a-zA-Z]+$/) &&
    //             user.password == user.repeatPassword)
    //             return true;
    //         else
    //             return false;
    //         }
    //     return false;
    // }



    //     constructor(){
//         super();
//         global.status = false;
//         this.myRef = React.createRef();
//     }

//     state = {
//         user: {},
//         email: '',
//         name: '',
//     }

//     componentWillMount() {
//         // custom rule will have name 'isPasswordMatch'
//         Form.addValidationRule('isPasswordMatch', (value) => {
//             if (value !== this.state.user.password) {
//                 return false;
//             }
//             return true;
//         });
//         Form.addValidationRule('isName', (value) => {
//             while(value != null){
//                 if (value.length > 2 && value.length < 21 && value.match(/^[A-Za-z]+$/)) {
//                     return true;
//                 }
//                 return false;
//             }
//             return false;
//         });

//         Form.addValidationRule('isPass', (value) => {
//             while(value != null){
//                 if (value.length > 5 && value.length < 21 && value.match(/^[0-9A-Za-z]+$/)) {
//                     return true;
//                 }
//                 return false;
//             }
//             return false;
//         });

//     }

//     componentWillUnmount() {
//         Form.removeValidationRule('isPasswordMatch');
//         Form.removeValidationRule('isName');
//         Form.removeValidationRule('isPass');
//     }

//     handlePassword = (event) => {
//         const { user } = this.state;
//         user.password = event.nativeEvent.text;
//         this.setState({ user });
//     }

//     handleRepeatPassword = (event) => {
//         const { user } = this.state;
//         user.repeatPassword = event.nativeEvent.text;
//         this.setState({ user });
//     }

//     handleName = (name) =>{
//         this.setState({name});
//     }

//     handleEmail = (email) =>{
//         this.setState({email});
//     }

//     submit = () =>{
       
//     }

    
//     handleSubmit = () => {
//         this.myRef.current.submit();
//     }
    
//   render() {
//     const { email } = this.state;
//     const { name } = this.state;
//     const { user } = this.state;
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle='Light-content'/>
//         <Form
//         isFormValid={{dryRun:true}}
//         ref={this.myRef}
//         instantValidate= {true}
//         //onError={false}
//         //onSubmit={true}
//         onSubmit={this.submit}>
//             <TextValidator    
//                 name="email"
//                 label='email'
//                 placeholder='email'
//                 placeholderTextColor="rgba(255,255,255,0.7)"
//                 validators={['required', 'isEmail']}
//                 errorMessages={['This field is required', 'Email invalid']}
//                 type="text"
//                 keyboardType="email-address"
//                 value={email}
//                 onChangeText={this.handleEmail}
//                 onSubmitEditing={this.handleSubmit}
//                 onBlur={this.handleSubmit}
//                 autoCapitalize='none'
//                 autoCorrect={false}
//                 style={styles.input}
//                 returnKeyType='next'
//             />
//             <TextValidator    
//                 name="name"
//                 label='name'
//                 placeholder='full name'
//                 placeholderTextColor="rgba(255,255,255,0.7)"
//                 validators={['isName', 'required']}
//                 errorMessages={['invalid name: must contain only letters, minimum 2 letters','This field is required']}
//                 type="text"
//                 value={name}
//                 maxLength="20"
//                 onChangeText={this.handleName}
//                 onSubmitEditing={this.handleSubmit}
//                 onBlur={this.handleSubmit}
//                 autoCapitalize='none'
//                 autoCorrect={false}
//                 style={styles.input}
//                 returnKeyType='next'
//             />
//             <TextValidator    
//                 name="password"
//                 label='password'
//                 placeholder='password'
//                 placeholderTextColor="rgba(255,255,255,0.7)"
//                 secureTextEntry 
//                 returnKeyType='next'
//                 validators={['isPass', 'required' ]}
//                 errorMessages={['required letters and numbers', 'minimum 6 characters required']}
//                 type="text"
//                 maxLength="20"
//                 value={user.password}
//                 onChange={this.handlePassword}
//                 onSubmitEditing={this.handleSubmit}
//                 onBlur={this.handleSubmit}
//                 style={styles.input}
//                 />
//             <TextValidator    
//                 name="repeatPassword"
//                 label='text'
//                 placeholder='repeat password'
//                 placeholderTextColor="rgba(255,255,255,0.7)"
//                 secureTextEntry 
//                 returnKeyType='next'
//                 validators={['isPasswordMatch','required']}
//                 errorMessages={['Password mismatch','This field is required']}
//                 type="text"
//                 maxLength="20"
//                 value={user.repeatPassword}
//                 onChange={this.handleRepeatPassword}
//                 onSubmitEditing={this.handleSubmit}
//                 onBlur={this.handleSubmit}
//                 style={styles.input}
//                 />
//         </Form>
//       </View>
//     );
//   }  
// }

// const styles = StyleSheet.create({
//   container:{
//     padding: 20,
//   },
//   input:{
//     height: 40,
//     width:260,
//     backgroundColor: '#07beb8',
//     color:'#FFF',
//     marginBottom: 10,
//     paddingHorizontal:10,
//     borderRadius: 5,
//   },

// });