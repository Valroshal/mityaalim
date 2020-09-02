import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView } from 'react-native';
import Expo from 'expo';
import LoginForm from '../components/LoginForm';

const id = "918095505346162";
const mityalimLogo = require ('../images/mityalimLogo.png');

export default class Login extends React.Component {

  login = async () =>{
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(id, {permissions:['public_profile','email', 'user_friends' ] })
    if (type === 'success')
    {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}^fields=id,name,email,about,picture`
      );

      console.log('response', response );

      const json = await response.json();

      console.log('USER_INFO: ', json);
    }else{
      alert(type);
    }
  
  };

  get FacebookButton(){
    return(
      <TouchableOpacity onPress={() => this.login()}>
        <View style={styles.buttonface}>
        <Text style={{color: 'white'}}>Login with Facebook</Text>   
        </View>  
      </TouchableOpacity>
    )
  };

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
          </View>
          
          {this.FacebookButton}
        </View>
      </KeyboardAvoidingView>  
    );
  }

}

const styles = StyleSheet.create({
    container:{
      // height: '100%',
      // width: '100%',
      // backgroundColor: '#ceffee'
    },
    text:{
        
        fontSize: 26,
        textAlign: 'center',
      },
    buttonface:{
        width: '80%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        padding: 24,
        backgroundColor: '#3b5998'
    },
    logo:{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
  });


