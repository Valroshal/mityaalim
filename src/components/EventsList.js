import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet,ScrollView, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const EventsList = ({
    EventItem,
    Length,
    Dates,
}) => {
    let list = [];
    let events = [];
    for(let i=0; i<Length; i++)
    {
        const dates = Dates[i];
        const text = EventItem[i];
        console.log('dates and text', dates, text)
        events.push({title: text,start: dates})
        
        list.push(
            <View key={i}>
                <Text 
                    numberOfLines={1}>
                    {text}
                </Text>
            </View>
        )
        
    }
    
    console.log('events', events)    
    return(
        <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
                {/* <View style={styles.textList}> */}
                <View style={{ width:'90%', margin:20}}>
                  <FullCalendar
                    addEventSource={events}
                    refetchEvents={true}
                    plugins={[ dayGridPlugin, interactionPlugin  ]}
                    initialView="dayGridMonth"
                    //events={[events]}
                    //events={[{ title: 'event 1', start: '2020-10-19' } ]}
                    // dateClick={this.handleDateClick}
                  />
                </View>
                <View>{list}</View>    
               
            
            </ScrollView>
            </View>
    )
}

export default EventsList;