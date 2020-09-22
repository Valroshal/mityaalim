import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import Register from '../components/RegistrationForm';

//import CheckBox from 'react-native-check-box';
import { CheckBox } from 'react-native-elements';

const ScreenHeight = Dimensions.get("window").height;

class Registration extends React.Component {

    state={
        buttonStateHolder : true ,
        buttonColor: '#00ffaa',
        checked : false,
        
      }
    
     
    clickRegister=() =>{
        console.log('entering the button')
        console.log('checked', this.state.checked)
        if(global.status == 'true' && this.state.checked == true)
            {
                this.setState({     
                    // On State True it will Disable the button.
                    buttonStateHolder : false
                })
                this.setState({
                    buttonColor : '#034643'
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

            {/* <View style={{ flexDirection: 'column'}}>
                <CheckBox />
               
                <View style={{flex:0.1, flexDirection: 'row'}}>
                    <CheckBox
                    style={styles.checkBox }
                    //style={{height: 20, width:20, backgroundColor: this.state.checked ? 'ffff00' : '#00ffaa'}}
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                    
                    /> 
                    {/* do link to term and conditions page  */}
                    {/* <Text>Privacy Policy, Terms and conditions</Text>   
                </View>
            </View> */} 

            <TouchableOpacity 
                style={{backgroundColor: this.state.buttonColor, paddingVertical: 15, borderRadius: 5, width:260}}
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
    // buttonContainer:{
    //     //backgroundColor:'#034643',
    //     paddingVertical: 15,
    //     borderRadius: 5,
    //     width:260, 
    //   },
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

// , { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#009688' }