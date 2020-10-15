import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import Expo from 'expo';
import LoginForm from '../components/LoginForm';
import FacebookLogin from '../components/FacebookLogin';
import validate from '../components/validation';

// source only logo: 'https://mityaalim.org/wp-content/uploads/2020/06/cropped-%d7%9e%d7%aa%d7%99%d7%99%d7%a2%d7%9c%d7%99%d7%9d-%d7%a8%d7%a7-%d7%a1%d7%9e%d7%9c-%d7%a8%d7%a7%d7%a2-%d7%a9%d7%a7%d7%95%d7%a3.png'
// #22aa22 - icon light green
// #086008 - icon dark green
const id = "918095505346162";
//const mityalimLogo = require ('../images/logoMale');
const ScreenHeight = Dimensions.get("window").height;

class Login extends React.Component {
  
  // need to add error when the field is empty, as on registration screen
  componentDidMount(){
    this.get()
  }

  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    getEmail: [],
    getPassword: []
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
      const err = 'Field cannot be empy';
      if(this.state.email == '')
      {
        this.setState({
          emailError: err,
        
      })}
      if(this.state.password == '')
      {
        this.setState({
          passwordError: err,
        })
      }
    }

  handleEmail = async (email) =>{
    await this.setState({email});
    console.log('email: ', this.state.email);
    this.setState({
      emailError: validate('email', this.state.email)
    });
    this.checkLogin();
  }

  handlePass = async (password) =>{
    await this.setState({password});
    console.log('pass: ', this.state.password);
    this.setState({
      passwordError: validate('password', this.state.password)
    }); 
    this.checkLogin();
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
                  getEmail: [...this.state.getEmail, data[i].email],
                  getPassword: [...this.state.getPassword, data[i].password]
                   })
              } 
            }
          }).catch(error => {
            console.log("Error fetching data-----------", error);
          });     
}    

  pressLogin = () =>{
    const err = 'אחד או יותר מהנתונים לא תואמים'
    console.log('onpress login')
    if(this.state.emailError== null && this.state.passwordError== null)
    {
      console.log('onpress login first if')
      console.log('state.email', this.state.getEmail)
      for(let i=0; i<this.state.getEmail.length; i++)
      {
        console.log('onpress login if for loop')
        if(this.state.getEmail[i] == this.state.email && this.state.getPassword[i] == this.state.password)
        {
          console.log('onpress login second if')
          console.log('email == email from db')
          this.props.navigation.navigate("HomeScreen");
        }
        else
        {
          console.log('on error in pressLogin')
          this.setState({
            passwordError: err,
            emailError:err
          });
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
              source={'https://mityaalim.org/wp-content/uploads/2020/06/cropped-%d7%9e%d7%aa%d7%99%d7%99%d7%a2%d7%9c%d7%99%d7%9d-%d7%9c%d7%95%d7%92%d7%95-%d7%9e%d7%9c%d7%90-%d7%a8%d7%a7%d7%a2-%d7%a9%d7%a7%d7%95%d7%a3.png'}
              />
          </View>
          <View style={styles.formContainer}>
              <LoginForm 
                onChangeEmail={this.handleEmail}
                onChangePassword={this.handlePass}
                emailError={this.state.emailError}
                passwordError={this.state.passwordError}
              />

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
      //backgroundColor: ,
      
    },
    text:{
        
        fontSize: 26,
        textAlign: 'center',
    },
    
    logo:{
        
        width: 250,
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