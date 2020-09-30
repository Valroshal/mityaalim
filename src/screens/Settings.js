import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import HomeMenuBar from '../components/HomeMenuBar'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
//import TopBarNav from 'top-bar-nav';

//last enter need to be saved in db of user
global.lastEnter = 'September 30'

class Settings extends React.Component{
  
  render(){
  const { navigate } = this.props.navigation
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    
      <View
         style={styles.container2}>
        <View
         style={styles.profileContainer}>
            <Text style={styles.upperText}>Profile and Settings</Text>
            <Text style={{fontSize:16, paddingTop:10}}>last entering at {global.lastEnter}</Text>
        </View>     
        <View 
         style={styles.contentContainer}>
             <View 
                style={styles.eachSetContainer}>
                <Text style={styles.text}>Password Change</Text>
            </View>
            <View 
                style={styles.eachSetContainer}>
                <Text style={styles.text}>My Phone Number</Text>
            </View>
            <View 
                style={styles.eachSetContainer}>
                <Text style={styles.text}>Emails sending</Text>
            </View>
            <View 
                style={styles.eachSetContainer}>
                <Text style={styles.text}>Getting Notifications</Text>
            </View>
        </View> 
        <StatusBar style="auto" />
        
        <View 
         style={styles.bottomMenu}>
           <View
              style={styles.button}>
              <TouchableHighlight
                  onPress={() => navigate("LoginScreen")}>
                  <Text style={styles.buttonText}>sign out</Text>
              </TouchableHighlight>
           </View>
           
           <View
              style={styles.button}>
              <TouchableHighlight
                  onPress={() => navigate("HomeScreen")}>
                  <Text style={styles.buttonText}>back home</Text>
              </TouchableHighlight>
           </View>
        </View>   
      </View>
      

    );
  }
}


        
//need camelCase in style sheet
const styles = StyleSheet.create({
  container2:{
    backgroundColor:'#ceffee',
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  profileContainer:{
    backgroundColor:'#808080',
    height: '30%',
    width: 375,
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  contentContainer:{
    width: 375,
    marginTop: 70  
  },
  eachSetContainer:{
      padding: 20
  },
  upperText:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  text:{
    //color:'#fff',
    fontSize: 22,
  },
  text2:{
    fontSize: 46,
  },

  bottomMenu:{
    backgroundColor: '#ececec',
    height: 50,
    width: 375,
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },


  button:{
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText:{
    color: '#000000'
  }
});




export default Settings;