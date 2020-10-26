import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet,ScrollView, FlatList, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import {
    ScrollIntoView, // enhanced View container
    wrapScrollView, // simple wrapper, no config
    wrapScrollViewConfigured, // complex wrapper, takes a config
  } from 'react-native-scroll-into-view';
import EventsList from './EventsList';

const CustomScrollView = wrapScrollView(ScrollView);


class EventsView extends React.Component{
    componentDidMount(){
        //this.get();
    }

    state = {
        eventsListName: ['All Day Event', 'Long Event', 'All Day Event', 'Long Event', 'All Day Event', 'Long Event'],
        eventsListDate: ['2020-10-22', '2020-10-21', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26'],
        events:[
            {
                title: 'All Day Event',
                start: '2020-10-22'
            },
            {
                title: 'Long Event',
                start: '2020-10-21',
                
            },
            {
              title: 'All Day Event',
              start: '2020-10-23'
            },
            {
                title: 'Long Event',
                start: '2020-10-24',
                
            },
            {
              title: 'All Day Event',
              start: '2020-10-25'
            },
            {
                title: 'Long Event',
                start: '2020-10-26',
                
            }
          ]
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
        return(
            <View style={{height:400}}>
                {/* <CustomScrollView contentContainerStyle={{flex: 1}}> */}
                <ScrollView contentContainerStyle={{flex: 1}}>
                    <View style={{ width:'90%', margin:20, height: '50%'}}>
                        <FullCalendar
                            //addEventSource={events}
                            //refetchEvents={true}
                            plugins={[ dayGridPlugin, interactionPlugin  ]}
                            initialView="dayGridMonth"
                            events={this.state.events}
                            locale='he'
                            buttonText={{today:'היום'}}
                            direction='rtl'
                            />
                        <EventsList
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

    
} 

export default EventsView;