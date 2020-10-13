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
  
  componentDidMount(){
    this.get()
  }

  state = {
    email: [],
    password: []
  }

  get = () =>{
    fetch('http://localhost:5000/getuser', {       
        method: 'GET',
        headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
        },   
        }).then((res) => res.json())
        .catch(err =>{
            console.log('happened!', err);
            return {};
        })
        .then( (data) => {
            console.log('parsed json: ', data);
            if (data != null){
              
              for(let i=0; i<data.length; i++)
              {
                this.setState({
                  email: [...this.state.email, data[i].email],
                  password: [...this.state.password, data[i].password]
                   })
              } 
            }
          }).catch(error => {
            console.log("Error fetching data-----------", error);
          });     
}    

  pressLogin = () =>{
    console.log('onpress login')
    if(global.flag == true)
    {
      console.log('onpress login first if')
      console.log('state.email', this.state.email)
      for(let i=0; i<this.state.email.length; i++)
      {
        console.log('onpress login if for loop')
        if(this.state.email[i] == global.email && this.state.password[i] == global.password)
        {
          console.log('email == email from db')
          this.props.navigation.navigate("HomeScreen");
        }
        else
        {
          console.log('emails not equal')
        }
      }
      
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