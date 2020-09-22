import {StyleSheet, View, Text, Image, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import React from 'react';

const ScreenHeight = Dimensions.get("window").height;
const mityalimLogo = require ('../images/mityalimLogo.png');

class Error extends React.Component{
    render(){
    return(
    <View style={styles.container}>
        <View style={styles.logoContainer}>
              <Image style={styles.logo}
              source={mityalimLogo} //here will be some error pic instead thee logo 
              />
        </View>
        <Text style={styles.text}>Ooooops something went wrong</Text>
        {/* <Text style={styles.text}>{error}</Text>     */}
    </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ceffee',
        height: ScreenHeight,
        justifyContent: 'center',
        alignItems: 'center', 
        paddingBottom: 100, 
      },
    text:{   
        fontSize: 26,
        textAlign: 'center',
    },
    logo:{   
        width: 170,
        height: 170,
        flexGrow: 1
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,

    },
})

export default Error; 