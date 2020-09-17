import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import Register from '../components/RegistrationForm';

const ScreenHeight = Dimensions.get("window").height;

class Registration extends React.Component {
render() {
    //const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
            <Register/>
            <TouchableOpacity 
                style={styles.buttonContainer}
                //onPress={() => navigate("HomeScreen")}> 
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
      }
  });

export default Registration;