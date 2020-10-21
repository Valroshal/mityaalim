import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';
import VideoSearchBar from './VideoSearchBar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import Calendar from 'react-calendar';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import EventsList from './EventsList';
class EventsComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
        //this.get();
    }
    
      state = {
            search: '',
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
        search:search
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

          <View style={styles.searchContainer}>
            <VideoSearchBar
            onChangeText = {this._onChangeText} 
            value={this.state.search}/>
          </View>

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
  searchContainer:{
    position:"absolute",
    top: '15%',
    textAlign: 'center',  
  },
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
});


export default EventsComponent;
