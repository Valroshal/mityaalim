import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView } from 'react-native';
import Expo from 'expo';
import LoginForm from '../components/LoginForm';
import FacebookLogin from '../components/FacebookLogin';

const id = "918095505346162";
const mityalimLogo = require ('../images/mityalimLogo.png');

export default class Login extends React.Component {

  

  render(){
    return (
      <KeyboardAvoidingView>  
        <View style={styles.container}>
          <Text style={styles.text}>
            Welcome to our app!
          </Text>
          <View style={styles.logoContainer}>
              <Image style={styles.logo}
              source={mityalimLogo}
              />
          </View>
          <View style={styles.formContainer}>
              <LoginForm />
              <FacebookLogin />
          </View>

        </View>
      </KeyboardAvoidingView>  
    );
  }

}

const styles = StyleSheet.create({
    container:{
      
    },
    text:{
        
        fontSize: 26,
        textAlign: 'center',
    },
    
    logo:{
        
        width: 70,
        height: 70,
        flexGrow: 1
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    }
  });


