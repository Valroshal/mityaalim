import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
<<<<<<< HEAD
import { ImageBackground, StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
=======
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
>>>>>>> eedb2653c8d3c10fe4a3b08bf2d3b7d888c0f3af
import { Icon } from 'react-native-elements';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';
import VideoSearchBar from './VideoSearchBar';
<<<<<<< HEAD
import EventsView from './EventsView';
import image from '../images/43118.jpg';
//import image from '../images/3704.jpg';
=======
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import Calendar from 'react-calendar';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import EventsList from './EventsList';
>>>>>>> eedb2653c8d3c10fe4a3b08bf2d3b7d888c0f3af
class EventsComponent extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
        //this.get();
    }
    
      state = {
            search: 'All Day Event1',
            button: '',
            color: 'transparent',
            font: 'normal',
            date: new Date(),
             
            eventsListName: ['All Day Event', 'Long Event'],
            eventsListDate: ['2020-10-22', '2020-10-21'],
            events:[
              {
                  title: 'All Day Event',
                  start: '2020-10-22'
              },
              {
                  title: 'Long Event',
                  start: '2020-10-21',
                  
              }]
      }
    
        onChange = date => this.setState({ date })

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

    get = () =>{
      fetch('http://localhost:5000/getevent', {
          
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
          .then( (data) => {
              console.log('parsed json: ', data);
              if (data != null){
                
                for(let i=0; i<data.length; i++)
                {
                  this.setState({
                    eventsList: data, 
                    eventsListName: [...this.state.eventsListName, data[i].name],
                    eventsListDate:[...this.state.eventsListDate, data[i].date_added],
                     })
                } 
              }
              
          
            }).catch(error => {
              console.log("Error fetching data-----------", error);
            });     
    }    

  render(){
  const { navigate } = this.props.navigation
  //const events = ['ev1','ev2','ev3','ev4','ev5','ev6','ev7','ev8','ev9','ev10'];
  const len = this.state.events.length;
  //const dates = ['2020-10-20','2020-10-21','2020-10-22','2020-10-23','2020-10-24','2020-10-25','2020-10-26','2020-10-27','2020-10-28','2020-10-29']
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

<<<<<<< HEAD
        
        {/* <View style={styles.searchContainer}> */}
          {/* <TouchableHighlight
            style={styles.button}>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>חפש</Text>
              </View>
          </TouchableHighlight> */}
          
=======
>>>>>>> eedb2653c8d3c10fe4a3b08bf2d3b7d888c0f3af
          <View style={styles.searchContainer}>
            <VideoSearchBar
            onChangeText = {this._onChangeText} 
            value={this.state.search}/>
          </View>
<<<<<<< HEAD
        {/* </View> */}

        <View style = {styles.calendarContainer}>
          <EventsView
          {...this.state}/>
        </View>

        <BottomMenuBar
        onPressSignOut={() => navigate("Login")}
        onPressSettings={() => navigate("SettingsScreen")}
        />  

=======

          <View style={{ flex: 1, marginTop: 70 }}>
                <View style={{height: 450}}>
                  <EventsList
                    EventItem={this.state.eventsListName}
                    Length={len}
                    Dates={this.state.eventsListDate }
                    CalendarEvent={this.state.events}
                    />
                </View>
          </View>

          <BottomMenuBar
          onPressSignOut={() => navigate("Login")}
          onPressSettings={() => navigate("SettingsScreen")}
          />  
        
>>>>>>> eedb2653c8d3c10fe4a3b08bf2d3b7d888c0f3af
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
<<<<<<< HEAD

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
=======
  textList: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    //alignItems: 'center',
    //padding: 30,
    margin: 20,
    width: '90%'
    //borderColor: '#2a4944',
    //borderWidth: 1,
    //backgroundColor: '#d2f7f1'
 }
>>>>>>> eedb2653c8d3c10fe4a3b08bf2d3b7d888c0f3af
});


export default EventsComponent;
