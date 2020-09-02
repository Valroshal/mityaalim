import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

export default function HomeComponent(){
    return (
        <View>
          <Text style={styles.text}>Hello New Component!</Text>
          <StatusBar style="auto" />
        </View>
      );
}

//need camelCase in style sheet
const styles = StyleSheet.create({
    text:{
      color:'#fff',
      fontSize: 26
    }
  });