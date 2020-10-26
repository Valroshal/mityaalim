import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet,ScrollView, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import FullCalendar from '@fullcalendar/react';
import {
    ScrollIntoView, // enhanced View container
    wrapScrollView, // simple wrapper, no config
    wrapScrollViewConfigured, // complex wrapper, takes a config
  } from 'react-native-scroll-into-view';

class EventsList extends React.Component{
    // componentDidMount(){
    //     this.EventsList();
    // }

    state = {
        textShown: -1,
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
    };

    toggleNumberOfLines = i => {
        this.setState({
        textShown: this.state.textShown === i ? -1 : i,
        });
    };

    
    render(){
        //EventsList = () => {
            console.log('from events list function');
            let list = [];
            for(let i=0; i<this.state.events.length; i++)
                {
                const text = this.state.eventsListName[i];
                const date = this.state.eventsListDate[i];
                list.push(
                    <View key={i} style={styles.textList}>
                        <ScrollIntoView>
                        <Text>{date}</Text>
                        <Text 
                            numberOfLines={this.state.textShown === i ? undefined : 3}>
                            {text} 
                        </Text>
                        <Text 
                        onPress={() => this.toggleNumberOfLines(i)}
                        style={{color:'red'}}>{this.state.textShown === i ? 'read less...' : 'read more...'}</Text>
                        </ScrollIntoView>
                    </View>
                )  
            }   
            return(
                <View>{list}</View>    
            )    
        }
   // }
    // render(){
    //     console.log('from events list render');
    //     return(
    //         <View>{this.EventsList}</View>
    //     )
    // }
}

const styles = StyleSheet.create({
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
    })
    
    export default EventsList;
    