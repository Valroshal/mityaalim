import React, { Component } from 'react';
import {StyleSheet, Image, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import Register from '../components/RegistrationForm';
import axios from 'axios';
import validate from '../components/validation';
import { CheckBox } from 'react-native-elements';

const ScreenHeight = Dimensions.get("window").height;

class Registration extends React.Component {
    componentDidMount(){
        this.get()
      }

    state = {
        status: false,
        checked : false,
        userList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
        name:'',
        nameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        repeatPassword: '',
        repeatPasswordError: '',
        getEmail:[],
        getPassword:[]
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
          await this.setState({
            nameError: validate('name', this.state.name)
          })
          this.setStatus();
        }

        handleEmail = async (email) =>{
          await this.setState({email});
          global.regEmail = this.state.email;
          await console.log('email: ', this.state.email);
          this.setState({
            emailError: validate('email', this.state.email)
          })
          this.setStatus();
        }

        handlePass = async (password) =>{
          await this.setState({password});
          this.setState({
            passwordError: validate('password', this.state.password)
          })
          this.handleConfirmPass();
        }

        handleConfirmPass = async (repeatPassword) =>{
          await this.setState({repeatPassword});
          if(this.state.repeatPassword == null)
          {
            await this.setState({
              repeatPasswordError: 'not matched'
            })
          } 
          if(this.state.password != this.state.repeatPassword)
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
            await this.setStatus();
          }
          await this.setStatus();

        }

        setStatus = () =>{
          const err = 'Field cannot be empy';
          if(this.state.nameError == null && this.state.emailError == null && this.state.passwordError == null
            && this.state.name!= null && this.state.email!= null && this.state.password!= null && this.state.repeatPassword!= null)
          {
            this.setState({
                status: true
              })
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
        }

    //there is a problem in api - post doesn't work
    post = async () =>{
        await fetch('http://localhost:5000/adduser', {
            
            method: 'POST',
            headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
            },
            body: {
                'name': global.regName,
                'email': global.regEmail,
                'password': global.regPass
                }    
            })
    }  
      
    // get works!!!!!!!!!!!!!!!!!!!!!!!!
    get = async () =>{
        await fetch('http://localhost:5000/getuser', {
            
            method: 'GET',
            headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
            },   
            }).then((res) => res.json()
            .catch(err =>{
                console.log('happened!', err);
                return {};
            }))
            .then((data) => {
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
    
    clickRegister=() =>{
        const err = 'אי-מייל כבר קיים במערכת'
        if(this.state.status == true && this.state.checked == true)
        {
            for(let i=0; i<this.state.getEmail.length; i++){
                if(this.state.getEmail[i] != this.state.email){
                    this.post();
                    this.props.navigation.navigate("HomeScreen");
                }
                else{
                    this.setState({
                        emailError:err
                    })
                }  
            }     
        }
    }

render() {
    const { navigate } = this.props.navigation
    return (
        <KeyboardAvoidingView>  
        <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo}
              source={'https://mityaalim.org/wp-content/uploads/2020/06/cropped-%D7%9E%D7%AA%D7%99%D7%99%D7%A2%D7%9C%D7%99%D7%9D-%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%9C%D7%90-%D7%A8%D7%A7%D7%A2-%D7%A9%D7%A7%D7%95%D7%A3-1024x282.png'}
              />
            </View>
            <Register
            onChangeName={this.handleName}
            onChangeEmail={this.handleEmail}
            onChangePassword={this.handlePass}
            onChangeRepeatPassword={this.handleConfirmPass}
            errorName={this.state.nameError}
            errorEmail={this.state.emailError}
            errorPassword={this.state.passwordError}
            errorRepeatPassword={this.state.repeatPasswordError}
            />
            <View style={{flexDirection: 'row', justifyContent:'flex-start', marginRight:15}}>
                <CheckBox 
                    style={styles.checkBox}
                    title=''
                    checked={this.state.checked}
                    onClick={() => this.setState({ checked: !this.state.checked })}
                    />
                <Text style={{marginTop:15}}>Privacy Policy, Terms and Conditions</Text>
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer}
                disabled={this.state.buttonStateHolder}
////////////////////////////////////////////////////need changes
                onPress={this.clickRegister}
                >
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("Login")}>
                  <View style={styles.registerContainer}>
                    <Text >Already a Member? </Text>
                    <Text style={{color:'#22aa22'}}> Login Here</Text>
                  </View>
              </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>  
    );
}
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: '#ceffee',
        //opacity: 0.5,
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
        padding: 30,
    },
    buttonContainer:{
        backgroundColor:'#034643',
        paddingVertical: 15,
        borderRadius: 5,
        width:260, 
      },
      buttonText:{
        textAlign: 'center',
        color:'#FFF',
        fontWeight: '500',
      },
      checkBox:{
        height: 20,
        width:20,
        borderColor: '#034643',
        backgroundColor: '#00ffaa', 
        
        marginRight:30,
        marginBottom: 20 
      },
      registerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        flexDirection: 'row',
      },

  });

export default Registration;

