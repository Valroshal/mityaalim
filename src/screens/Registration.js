import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import Register from '../components/RegistrationForm';
// import CheckBox from '@react-native-community/checkbox';
//import {CheckBox} from "native-base";
import CheckBox from 'react-native-check-box'

const ScreenHeight = Dimensions.get("window").height;

class Registration extends React.Component {

    state={
        buttonStateHolder : true ,
        checked : false,
      }
    
     
    clickRegister=() =>{
        console.log('entering the button')
        if(global.status == 'true')
            {
                this.setState({     
                    // On State True it will Disable the button.
                    buttonStateHolder : false
                })
                console.log('inside the loop');
                console.log('button state',this.state.buttonStateHolder);
            }
        console.log('status',global.status);
        console.log('button state',this.state.buttonStateHolder);
    }

render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
            
            <Register/>
            
            <View style={{ flexDirection: 'column'}}>
                <CheckBox />
               
                <View style={{flex:0.1, flexDirection: 'row'}}>
                    <CheckBox
                    style={styles.checkBox }
                    //style={{height: 20, width:20, backgroundColor: this.state.checked ? 'ffff00' : '#00ffaa'}}
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                    
                    /> 
                    <Text>Privacy Policy, Terms and conditions</Text>   
                </View>
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer}
                disabled={this.state.buttonStateHolder}
                onMouseEnter={this.clickRegister}
                //onPress={() => navigate("HomeScreen")}
                onPress={()=>{navigate("HomeScreen")}}
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
        
        marginRight:10,
        marginBottom: 20 
      }
  });

export default Registration;

// , { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#009688' }