import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';

class EventsComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
    }
    
      state = {
            color: 'transparent',
            font: 'normal'
        }
    
        checkColor = () =>{
          console.log('on load home', this.state.color);
          if(this.state.color == 'transparent')
          {
            this.setState({
              color: '#50C878',
              font: 'bold'
            })
          }
        }

    setEventsButton = () =>{
      this.setState({
        color: '#50C878',
        font: 'bold'
      })
      console.log('events', this.state.color);
      this.props.navigation.navigate("EventsComponent");
    }

  render(){
  const { navigate } = this.props.navigation
  return (
      <View
         style={styles.container2}>
           <HomeMenuBar
          VideoColorBorder = {'transparent'}
          EventsColorBorder = {this.state.color}
          BudgetColorBorder = {'transparent'}
          HomeColorBorder = {'transparent'}
          onPressBudget={() => navigate("BudgetComponent")}
          onPressEvents={this.setEventsButton}
          onPressVideo={() => navigate("VideoComponent")}
          onPressHome={() => navigate("HomeScreen")}  
          />

         

        <Text style={styles.text}>Hello Events Component!</Text>
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


export default EventsComponent;
