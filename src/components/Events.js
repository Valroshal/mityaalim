import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { ImageBackground, StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';
import VideoSearchBar from './VideoSearchBar';
import EventsView from './EventsView';
import image from '../images/43118.jpg';
//import image from '../images/3704.jpg';
class EventsComponent extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
    }
    
      state = {
            search: 'All Day Event1',
            button: '',
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

    _onChangeText = async (search) =>{
      console.log('text changes on events screen', search)
      await this.setState({
        search:search,
        button: 'changed'
      });
      console.log('this.state.search: ', this.state.search)
      
  }

  render(){
  const { navigate } = this.props.navigation
  return (
    <ImageBackground source={image} style={styles.image} imageStyle= {{opacity:0.2}}>
      <View
         style={styles.container2}>
          <StatusBar style="auto" />

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

        
        {/* <View style={styles.searchContainer}> */}
          {/* <TouchableHighlight
            style={styles.button}>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>חפש</Text>
              </View>
          </TouchableHighlight> */}
          
          <View style={styles.searchContainer}>
            <VideoSearchBar
            onChangeText = {this._onChangeText} 
            value={this.state.search}/>
          </View>
        {/* </View> */}

        <View style = {styles.calendarContainer}>
          <EventsView
          {...this.state}/>
        </View>

        <BottomMenuBar
        onPressSignOut={() => navigate("Login")}
        onPressSettings={() => navigate("SettingsScreen")}
        />  

      </View>
    </ImageBackground>
    );
  }
}

//need camelCase in style sheet
const styles = StyleSheet.create({
  container2:{
    //backgroundColor:'#ceffee',
    //flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    //flexDirection: 'row',
    
  },
  text:{
    //color:'#fff',
    fontSize: 26,
  },
  searchContainer:{
    position:"absolute",
    top: '15%',
    textAlign: 'center',
    
  },

  calendarContainer:{
    position:"absolute",
    top: '25%',
    width: '100%',
    //backgroundColor: 'white'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonTextContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },

  button:{

  }
});


export default EventsComponent;
