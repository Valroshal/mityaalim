import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import Expo from 'expo';
import LoginForm from '../components/LoginForm';
import FacebookLogin from '../components/FacebookLogin';

const id = "918095505346162";
const mityalimLogo = require ('../images/mityalimLogo.png');
const ScreenHeight = Dimensions.get("window").height;

class Login extends React.Component {

  pressLogin = () =>{
    if(global.flag == true)
    {
      this.props.navigation.navigate("HomeScreen");
    }
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <KeyboardAvoidingView>  
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image style={styles.logo}
              source={mityalimLogo}
              />
          </View>
          <View style={styles.formContainer}>
              <LoginForm />

              <TouchableOpacity
                onPress={this.pressLogin}
                style={styles.loginButtonContainer} >
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </TouchableOpacity> 

              <TouchableHighlight
                style={styles.button}>
                  <View style={styles.registerContainer}>
                    <Text style={styles.buttonText}>Not a Registered User?</Text>
                  </View>
              </TouchableHighlight>

              <TouchableOpacity
                onPress={() => navigate("RegistrationScreen")}
                style={styles.CreateAccountButtonContainer} >
                <Text style={styles.loginButtonText}>Create an Account</Text>
              </TouchableOpacity> 

              <View style={styles.registerContainer}>
                    <Text style={styles.buttonText}>or</Text>
              </View>
              {/* facebook login doesn't work need to do */}
              <FacebookLogin />
          </View>
        </View>
      </KeyboardAvoidingView>  
    );
  }

}

const styles = StyleSheet.create({
    container:{
      padding: 20,
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
    },
    loginButtonText:{
      textAlign: 'center',
      color:'#FFF',
      fontWeight: '500',
      
    },
    loginButtonContainer:{
      backgroundColor:'#034643',
      paddingVertical: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '88%',
      marginLeft: 20
    },
    CreateAccountButtonContainer:{
      backgroundColor:'#034643',
      paddingVertical: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '88%',
      marginLeft: 20,
      marginTop: 5
    },
    registerContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
    },
  });


  export default Login;