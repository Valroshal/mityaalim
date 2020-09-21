import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';

    class RegistrationForm extends React.Component{

        constructor(){
            super();
            global.status = false;
            this.myRef = React.createRef();
        }
    state = {
        user: {},
        email: '',
        name: '',
    }

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

    componentWillMount() {
        // custom rule will have name 'isPasswordMatch'
        Form.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
        Form.addValidationRule('isName', (value) => {
            while(value != null){
                if (value.length > 2 && value.length < 21 && value.match(/^[A-Za-z]+$/)) {
                    return true;
                }
                return false;
            }
            return false;
        });

        Form.addValidationRule('isPass', (value) => {
            while(value != null){
                if (value.length > 5 && value.length < 21 && value.match(/^[0-9a-zA-Z]+$/)) {
                    return true;
                }
                return false;
            }
            return false;
        });

    }

    componentWillUnmount() {
        Form.removeValidationRule('isPasswordMatch');
        Form.removeValidationRule('isName');
        Form.removeValidationRule('isPass');
    }

    handlePassword = (event) => {
        const { user } = this.state;
        user.password = event.nativeEvent.text;
        this.setState({ user });
    }

    handleRepeatPassword = (event) => {
        const { user } = this.state;
        user.repeatPassword = event.nativeEvent.text;
        this.setState({ user });
    }

    handleName = (name) =>{
        this.setState({name});
    }

    handleEmail = (email) =>{
        this.setState({email});
    }

    submit = () =>{
        // your submit logic
    }

    
    handleSubmit = () => {
        console.log(this.state);
        console.log('status=', global.status);
        while(this.state.email!= null && this.state.name!=null && this.state.user.password!=null && this.state.user.repeatPassword!=null){
            if(
                
                this.state.email.match(/\S+@\S+\.\S+/) &&
                this.state.name.length > 2 && this.state.name.length < 21 && this.state.name.match(/^[A-Za-z]+$/) &&
                this.state.user.password.length > 5 && this.state.user.password.match(/^[0-9a-zA-Z]+$/) &&
                this.state.user.password == this.state.user.repeatPassword)
                status = true;
            else
                status = false;
            }
        console.log('status', global.status);
        this.myRef.current.submit();
    }



    
  render() {
    const { email } = this.state;
    const { name } = this.state;
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='Light-content'/>
        <Form
        ref={this.myRef}
        instantValidate= {true}
        // onError={true}
        onSubmit={this.submit}>
            <TextValidator    
                name="email"
                label='email'
                placeholder='email'
                placeholderTextColor="rgba(255,255,255,0.7)"
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email invalid']}
                type="text"
                keyboardType="email-address"
                value={email}
                onChangeText={this.handleEmail}
                onSubmitEditing={this.handleSubmit}
                onBlur={this.handleSubmit}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                returnKeyType='next'
            />
            <TextValidator    
                name="name"
                label='name'
                placeholder='full name'
                placeholderTextColor="rgba(255,255,255,0.7)"
                validators={['isName', 'required']}
                errorMessages={['invalid name: must contain only letters, minimum 2 letters','This field is required']}
                type="text"
                value={name}
                maxLength="20"
                onChangeText={this.handleName}
                onSubmitEditing={this.handleSubmit}
                onBlur={this.handleSubmit}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                returnKeyType='next'
            />
            <TextValidator    
                name="password"
                label='password'
                placeholder='password'
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry 
                returnKeyType='next'
                validators={['isPass', 'required' ]}
                errorMessages={['required letters and numbers', 'minimum 6 characters required']}
                type="text"
                maxLength="20"
                value={user.password}
                onChange={this.handlePassword}
                onSubmitEditing={this.handleSubmit}
                onBlur={this.handleSubmit}
                style={styles.input}
                />
            <TextValidator    
                name="repeatPassword"
                label='text'
                placeholder='repeat password'
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry 
                returnKeyType='next'
                validators={['isPasswordMatch','required']}
                errorMessages={['Password mismatch','This field is required']}
                type="text"
                maxLength="20"
                value={user.repeatPassword}
                onChange={this.handleRepeatPassword}
                onSubmitEditing={this.handleSubmit}
                onBlur={this.handleSubmit}
                style={styles.input}
                />
        </Form>
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