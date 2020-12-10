import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar } from 'react-native';

const id = "918095505346162";

export default class FacebookLogin extends Component {

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
            <Text style={styles.text}>הרשמה עם פייסבוק</Text>   
            </View>  
            </TouchableOpacity>
        )
        };

    render() {
        return (
        <View style={styles.container}>
            <View>
                {this.FacebookButton}
            </View>
        </View>
        );
    }  
    }

    const styles = StyleSheet.create({
        
        text:{
            fontFamily: 'OpenSansHebrew-Regular',
            fontSize:20,
            textAlign: 'center',
            color: 'white'
        },
        buttonface:{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              //padding: 24,
              backgroundColor: '#3b5998',
              //marginTop:10,
              //marginLeft:20
        },

    });