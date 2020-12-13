import React from 'react';
import {StyleSheet, Image, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
//import axios from 'axios';
import {TextField} from 'react-native-material-textfield';
import validate from '../components/validation';

const ScreenHeight = Dimensions.get("window").height;

class RecoverPassword extends React.Component {

    state = {
        email: '',
        emailError: ''
    }

    checkMail = () =>{
        const err = 'Field cannot be empy';
        if(this.state.email == '')
        {
          this.setState({
            emailError: err,  
        })}
      }
  
    handleEmail = (email) =>{
      this.setState({email}, () =>
      this.setState({
        emailError: validate('email', this.state.email)
      }));
      this.checkMail();
    }

    sendMail = () => {
        // need to write function to send mail (or with password or update password)
    }

    register() {
        const emailError = validate('email', this.state.email)
        this.setState({
            emailError: emailError,
          })
          if (!emailError) {
            alert('Details are valid!')
          }
        }

    render(){
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <StatusBar barStyle='Light-content'/>
                <View style={styles.logoContainer}>
                <Image style={styles.logo}
                source={'https://mityaalim.org/wp-content/uploads/2020/06/cropped-%d7%9e%d7%aa%d7%99%d7%99%d7%a2%d7%9c%d7%99%d7%9d-%d7%9c%d7%95%d7%92%d7%95-%d7%9e%d7%9c%d7%90-%d7%a8%d7%a7%d7%a2-%d7%a9%d7%a7%d7%95%d7%a3.png'}
                />
                </View>

                <View style={{maxWidth: '375px', width: '100%', paddingRight: 15, paddingLeft: 15, paddingTop: 15}}>
                    <View style={{margin: 5, paddingTop:30, paddingBottom:30}}>
                        <Text style={[styles.buttonText, {fontSize:24}]}>שכחת סיסמה?</Text>
                        <Text style={[styles.buttonText, {fontSize:16, paddingTop:5}]}>הזן דוא''ל ונשלח הוראות לאיפוס סיסמה</Text>
                    </View>
                    
                    <View style={{margin: 5}}>
                        <TextField
                        placeholder=":דוא''ל"
                        placeholderTextColor="#23a500"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                        returnKeyType='next'
                        onChangeText={this.handleEmail}
                        error={this.state.emailError}/>
                    </View>
                
                    <View style={{margin: 5}}>
                        <TouchableOpacity
                        onPress={this.sendMail}
                        style={styles.loginButtonContainer} >
                        <Text style={styles.loginButtonText}>שלח דוא''ל</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={{textAlign: 'center', paddingTop: 15}}
                        onPress={() => navigate("Login")}>
                        <View style={styles.registerContainer}>
                            <Text style={{color: '#034643', fontFamily: 'OpenSansHebrew-Regular', fontSize: 16}}>חזרה למסך כניסה</Text>
                        </View>
              </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: ScreenHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 250,
        height: 70,
        flexGrow: 1
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        flex: 1,
        borderColor: 'white',
        textAlign: 'right',
        alignSelf: 'stretch',
        height: 50,
        width: "100%",
        backgroundColor: '#fff',
        color:"#23a500",
        borderRadius: 3,
        paddingRight: 10,
        fontFamily: 'OpenSansHebrew-Regular'
        },
    loginButtonText:{
        textAlign: 'center',
        color:'#FFF',
        fontWeight: '500',
        fontFamily: 'OpenSansHebrew-Regular',
        fontSize:20
        },
    loginButtonContainer:{
        backgroundColor:'#23a500',
        paddingVertical: 15,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 15
    },
    buttonText:{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:  'center',
        color:'#034643',
        fontFamily: 'OpenSansHebrew-Regular'
      }
})

export default RecoverPassword;

