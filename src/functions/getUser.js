import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const getUser = () =>{
    return fetch('http://localhost:5000/getuser', {
        
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
  }    


  export default getUser;


