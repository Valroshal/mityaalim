import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import {TextField} from 'react-native-material-textfield';


const QuestionInput =({
    onChange,
    //for all fields
    //
}) => {
    return (
        <View>
          <TextField
            name='name'
            placeholder=''
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            //returnKeyType='next'
            onChangeText={onChange}
            error={errorValue}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      //padding: 5,
    },
    input:{
      //width:'90%',
      backgroundColor: '#fff',
      color:'#FFF',
      marginBottom: 10,
      paddingHorizontal:10,
      //borderRadius: 5,
      borderColor:'#000',
      opacity: 0.8,
      height: 30,
    }
  });
      
export default QuestionInput;
