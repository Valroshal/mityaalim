import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';
import validate from '../components/validation'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';



export default class LoginForm extends Component {
  constructor(){
    super();
    global.flag = false;
  }
  
    state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    }

    register() {
      const emailError = validate('email', this.state.email)
      const passwordError = validate('password', this.state.password)

      this.setState({
          emailError: emailError,
          passwordError: passwordError,
        })
    
        if (!emailError && !passwordError) {
          alert('Details are valid!')
        }
      }

      checkLogin = () =>{
        if(this.state.emailError== null && this.state.passwordError== null )
        {
          global.flag = true;
        }
        console.log('flag: ', global.flag);
      }

    handleEmail = (email) =>{
      this.setState({email});
      console.log('email: ', this.state.email);
      this.setState({
        emailError: validate('email', this.state.email)
      })
      
    }

    handlePass = (password) =>{
      this.setState({password});
      console.log('pass: ', this.state.password);
      this.setState({
        passwordError: validate('password', this.state.password)
      })
      
    }

    
    

  render() {
    //const { navigate } = this.props.navigation
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
                  onChangeText={this.handleEmail}
                  onBlur={this.checkLogin}
                  error={this.state.emailError}/>
        
        <TextField
                  placeholder='password'
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={this.handlePass}
                  onBlur={this.checkLogin}
                  error={this.state.passwordError}
                  secureTextEntry={true}/>
        {/* <TextInput placeholder='email' 
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
                  ref={(input) => this.passwordInput = input}/>  */}
        {/* <TouchableOpacity
          //onPress={this.pressLogin}
          onPress={()=>{this.props.navigation.navigate("HomeScreen")}}
          style={styles.buttonContainer} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>   */}
      
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