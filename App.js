import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import RegistrationScreen from './src/screens/Registration';
import SettingsScreen from './src/screens/Settings';
import Expo from 'expo';
import Questionaire from './src/screens/Questionaire';
import Error from './src/components/Error';
import BudgetComponent from './src/components/Budget';
import VideoComponent from './src/components/Video';
import VideoComponentForRedux from './src/components/Video';
import EventsComponent from './src/components/Events';
import RecoverPassword from './src/screens/RecoverPasswordScreen';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { applyMiddleware, createStore, compose,  } from 'redux';
// class App extends React.Component{
//       render(){
//         return(
//             <View style={styles.container}>
//               <HomeScreen/>
//               <StatusBar style="auto" />
//             </View>
//         );
//       }
//   }

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, {}, composeEnhancer(applyMiddleware(ReduxThunk)) );
  const Stack = createStackNavigator();
  class App extends React.Component{
    render(){
    return (
      
         <Provider store={store}>
         
          
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{  headerShown: false } }  
            >
              <Stack.Screen
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                name="RegistrationScreen"
                component={RegistrationScreen}
              />
              
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
              />
              <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
              />
              <Stack.Screen
                name="Error"
                component={Error}
              />  
              <Stack.Screen
                name="VideoComponent"
                component={VideoComponent}
              />
              <Stack.Screen
                name="EventsComponent"
                component={EventsComponent}
              />
              <Stack.Screen
                name="BudgetComponent"
                component={BudgetComponent}
              />
              <Stack.Screen
                name="Questionaire"
                component={Questionaire}
              />
              <Stack.Screen
                name="RecoverPassword"
                component={RecoverPassword}
              />
            </Stack.Navigator>

        </NavigationContainer>
         </Provider> 
     );
  } }
      

//need camelCase in style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ceffee',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    // flexDirection: 'row',
     backgroundColor: '#ceffee',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color:'#fff',
    fontSize: 26
    // color:'#fff',
    // fontSize: 26
  }
});

export default App;