import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import Register from '../components/RegistrationForm';
import axios from 'axios';

//import CheckBox from 'react-native-check-box';
import { CheckBox } from 'react-native-elements';

const ScreenHeight = Dimensions.get("window").height;

class Registration extends React.Component {

    state={
        //buttonStateHolder : true ,
        //buttonColor: '#00ffaa',
        checked : false,
        
      }

    instance = axios.create({
        baseURL: 'http://localhost:5000',
        timeout: 1000,
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:19006',
            'Access-Control-Expose-Headers':'Access-Control-*',
            'Access-Control-Allow-Headers':'Access-Control-*',
            'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            'Allow':'GET, POST, PUT, DELETE, OPTIONS, HEAD'
        }
        });

        getUser = () => this.instance({
            'method':'GET',
            'url':'/getuser',
            // 'params': {
            //     'search':'parameter',
            // }
        })

        postUser = () =>this.instance({
            'method': 'POST',
            'url':'/adduser',
            'data': {
                'name': global.regName,
                'email': global.regEmail,
                'password': global.regPass
            }
        })
    //url = 'http://localhost:5000/adduser';
    //baseURL = 'http://localhost:5000'
    // postUser = () =>{
    // axios.post('/adduser', {
    //     name: global.regName,
    //     email: global.regEmail,
    //     password: global.regPass
    // }, this.baseURL)
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    // }

    

     
    clickRegister=() =>{
        console.log('entering the button')
        console.log('checked', this.state.checked)
        if(global.status == 'true' && this.state.checked == true)
            {
                // this.setState({     
                //     // On State True it will Disable the button.
                //     buttonStateHolder : false
                // })
                // this.setState({
                //     buttonColor : '#034643'
                // })
                // console.log('inside the loop');
                // console.log('button state',this.state.buttonStateHolder);
                this.postUser();
                this.props.navigation.navigate("HomeScreen");

            }
        // console.log('status',global.status);
        // console.log('button state',this.state.buttonStateHolder);
    }

render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
            
            <Register
            onChange={this.clickRegister} //need something that will change the button before click
            />
            <View style={{flexDirection: 'row', justifyContent:'flex-start', marginRight:15}}>
                <CheckBox 
                    style={styles.checkBox}
                    title=''
                    checked={this.state.checked}
                    onClick={() => this.setState({ checked: !this.state.checked })}
                    />
                <Text style={{marginTop:15}}
                >Privacy Policy, Terms and Conditions</Text>
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer}
                disabled={this.state.buttonStateHolder}
////////////////////////////////////////////////////need changes
                //onMouseOver={this.clickRegister}
                //onPress={()=>{navigate("HomeScreen")}}
                onPress={this.clickRegister}
                >
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity> 
        </View>
    );
}
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ceffee',
        height: ScreenHeight,
        justifyContent: 'center',
        alignItems: 'center',
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
      }
  });

export default Registration;

