import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import RegistrationScreen from './src/screens/Registration';
import Expo from 'expo';
import  RootStack from './src/navigation/navigator';
import Error from './src/components/Error';

class App extends React.Component{
      render(){
        return(
            <View style={styles.container}>
              <RegistrationScreen/>
              <StatusBar style="auto" />
            </View>
        );
      }
  }

  // const Stack = createStackNavigator();
  // class App extends React.Component{
  //   render(){
  //   return (
      
  //       <NavigationContainer>
  //         <Stack.Navigator
  //             screenOptions={{  headerShown: false } }  
  //           >
  //             <Stack.Screen
  //               name="Login"
  //               component={LoginScreen}
  //             />
  //             <Stack.Screen
  //               name="RegistrationScreen"
  //               component={RegistrationScreen}
  //             />
  //             <Stack.Screen
  //               name="HomeScreen"
  //               component={HomeScreen}
  //             />
  //             <Stack.Screen
  //               name="Error"
  //               component={Error}
  //             />
  //           </Stack.Navigator>
  //       </NavigationContainer>
      
  //   );

  // } }
      

//need camelCase in style sheet
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
     backgroundColor: '#ceffee',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    // color:'#fff',
    // fontSize: 26
  }
});

export default App;

  // class App extends React.Component{
  //     render(){
  //       return(
  //           <View style={styles.container}>
  //             <Error/>
  //             <StatusBar style="auto" />
  //           </View>
  //       );
  //     }
  // }