import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { Switch, StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import HomeMenuBar from '../components/HomeMenuBar'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Icon } from 'react-native-elements';


//last enter need to be saved in db of user
global.lastEnter = 'September 30'
global.phone = ''

class Settings extends React.Component{
    
    componentDidMount(){
        this.phoneNum()
        this.props.navigation.addListener('willFocus', this.load)
    }

    state = {
        phone: global.phone,
        switchEmailValue: true,
        switchNoteValue: true,
    }

    phoneNum =() =>{
        console.log('on phone function')
        if(global.phone == '')
        {
            this.setState({
                phone: 'no phone num added'
              })
            
        }
    }
  
    toggleSwitch1 = async (value) => {
        await this.setState({switchEmailValue: value})
        console.log('Switch 1 is: ' + value)
        this.emailSend()
    }

     toggleSwitch2 = async (value) => {
        await this.setState({switchNoteValue: value})
        console.log('Switch 2 is: ' + value)
        this.getNotifications()
    }

    getNotifications = () =>{
        if(this.state.switchNoteValue)
        {
            //send notifications to the user's phone
            console.log('sending notifications')
        }else{
            //do not send notifications to the user's phone
            console.log('no notifications sent')
        }
    }

    emailSend = () =>{
        if(this.state.switchEmailValue)
        {
            //send email to the user
            console.log('sending the emails')
        }else{
            //do not send an email
            console.log('no emails sent')
        }
    }

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
                <Text style={styles.text}>Change Profile Settings</Text>
                <View style={{flexDirection: 'row', marginTop:10}}>
                    {/* <Text style={{fontWeight:'bold'}}>change</Text> */}
                    <Icon name='chevron-right' type='font-awesome' style={{paddingLeft:3, fontSize:'5px'}} />    
                </View>
            </View>
             <View 
                style={styles.eachSetContainer}>
                <Text style={styles.text}>Password Change</Text>
                <View style={{flexDirection: 'row', marginTop:10}}>
                    {/* <Text style={{fontWeight:'bold'}}>change</Text> */}
                    <Icon name='chevron-right' type='font-awesome' style={{paddingLeft:3, fontSize:'5px'}} />    
                </View>
            </View>
            <View 
                style={styles.eachSetContainer}>
                <View style={{marginTop:15}}>
                    <Text style={styles.text}>My Phone Number</Text>
                    <Text>{this.state.phone}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop:10}}>
                    {/* <Text style={{fontWeight:'bold'}}>change</Text> */}
                    <Icon name='chevron-right' type='font-awesome' style={{paddingLeft:3,}} />  
                </View>
            </View>
            <View 
                style={styles.eachSetContainer}>
                <View>
                    <Text style={styles.text}>Emails sending</Text>
                    <Text>we will send you our events</Text>
                </View>
                <View>
                    <Switch
                    onValueChange = {this.toggleSwitch1}
                    value = {this.state.switchEmailValue}/>
                </View>
            </View>
            <View 
                style={styles.eachSetContainer}>
                <View>
                    <Text style={styles.text}>Getting Notifications</Text>
                    <Text>we will send you notifications to your phone</Text>
                </View>
                <View>
                    <Switch
                    onValueChange = {this.toggleSwitch2}
                    value = {this.state.switchNoteValue}/>
                </View>
            </View>
        </View> 
        <StatusBar style="auto" />
        
        <View 
         style={styles.bottomMenu}>
           <View
              style={styles.button}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        onPress={() => navigate("LoginScreen")}>
                        <Text style={styles.buttonText}>sign out</Text>
                    </TouchableHighlight>
                    <Icon name='sign-out' type='font-awesome' style={{paddingLeft:3}} />
                </View>
           </View>
           
           <View
              style={styles.button}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        onPress={() => navigate("HomeScreen")}>
                        <Text style={styles.buttonText}>back home</Text>
                    </TouchableHighlight>
                    <Icon name='home' type='font-awesome' style={{paddingLeft:3}} />
                </View>
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
    
    //backgroundColor:'#034643',
    backgroundColor: '#07beb8',
    //backgroundColor:'#808080',
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
    marginTop: 140  
  },
  eachSetContainer:{
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',  
    alignItems: 'center',
    
  },
  
  upperText:{
    fontSize: 18,
    fontWeight: 'bold',
    //color:'#fff'
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