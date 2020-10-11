import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import HomeMenuBar from '../components/HomeMenuBar';
import BottomMenuBar from '../components/BottomMenuBar';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Icon } from 'react-native-elements';



class HomeComponent extends React.Component{
  componentDidMount(){
    this.checkColor()
    this.props.navigation.addListener('willFocus', this.load)
}
  
  state = {
        color: 'transparent',
        font: 'normal'
    }

  onSwipeLeft = () =>{
    this.props.navigation.navigate('VideoComponent')
  }

  onSwipeRight = () =>{
    this.props.navigation.goBack()
  }

  checkColor = async() =>{
    console.log('on load home', this.state.color);
    if(this.state.color == 'transparent')
    {
      await this.setState({
        color: '#50C878',
        font: 'bold'
      })
    }
    console.log('after change home', this.state.color);
  }

  setHomeButton = () =>{
    this.setState({
      color: '#50C878',
      font: 'bold'
    })
    console.log('home', this.state.color);
    this.props.navigation.navigate("HomeScreen");
  }
  
  render(){
  const { navigate } = this.props.navigation 
  console.log('color', this.state.color)
  return (    
      <View
         style={styles.container2}>
        <HomeMenuBar
          VideoColorBorder = {'transparent'}
          EventsColorBorder = {'transparent'}
          BudgetColorBorder = {'transparent'}
          HomeColorBorder = {this.state.color}
          onPressBudget={() => navigate("BudgetComponent")}
          onPressEvents={() => navigate("EventsComponent")}
          onPressVideo={() => navigate("VideoComponent")}
          onPressHome={this.setHomeButton}  
          />
        <Text style={styles.text}>Hello Home Component!</Text>
        <StatusBar style="auto" />
        
        <BottomMenuBar
        onPressSignOut={() => navigate("Login")}
        onPressSettings={() => navigate("SettingsScreen")}
        />
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
  text:{
    //color:'#fff',
    fontSize: 26,
  },
});


export default HomeComponent;
