import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet,ScrollView, Linking, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
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
let res = 'res';
let name = '';
class EventsView extends React.Component{
    
    constructor(props){
        super(props);
        this.scrollRef = React.createRef();
    }

    componentDidUpdate(){
        
            if(res == 'res')
            {
                const res = this.props.button
                if(res != '')
                {
                    this.executeScroll();
                }
            }
            else if(this.props.button != res)
            {
                this.executeScroll();
            }    
    }

    state = {
        eventName: '',
        textShown: -1,
    }   

    executeScroll = (i) =>{ 
        
        for(let j=0; j<this.props.eventsList.length; j++){
            if(this.props.search.toLowerCase() == this.props.eventsList[j].name.toLowerCase())
            {
                console.log('search in child if')
                i=j
            }
        }
        
        let y = 100;
        console.log('i in execute scroll' , i)
        if(i==0){
            y=100 
        }else 
        {
            if(this.state.textShown != -1)
            {
                y=i*200 //need to be dynamic because of the text height
            }else
                y=i*150
        }
        this.scrollRef.scrollTo({x: 0, y: y, animated: true})
        //this.scrollRef.scrollToEnd()
    };

    scrollFromCalendar = (arg) =>{
        name= arg.event.title
        let i =0;
        for(let j=0; j<this.props.eventsList.length; j++){
            if(name.toLowerCase() == this.props.eventsList[j].name.toLowerCase())
            {
                console.log('search in child if')
                i=j
            }
        }
        
        let y = 100;
        console.log('i in execute scroll' , i)
        if(i==0){
            y=100 
        }else 
        {
            if(this.state.textShown != -1)
            {
                y=i*200 //need to be dynamic because of the text height
            }else
                y=i*150
        }
        this.scrollRef.scrollTo({x: 0, y: y, animated: true})
        //this.scrollRef.scrollToEnd()
    };
    

    toggleNumberOfLines = i => {
        this.setState({
        textShown: this.state.textShown === i ? -1 : i,
        });
        console.log('togle text shown', this.state.textShown)
    };

    getEventTitle = function(arg){
        alert(arg.event.title)
        alert(arg.event.start)
      }

    render(){
        
        let list = [];
        //let events = {title: '', start: ''}
            for(let i=0; i<this.props.eventsList.length; i++)
            //for(let i=this.state.events.length-1; i>=0; i--) //from the most recent to old, need to check on db
                {
                const text = this.props.eventsList[i].name;
                const date = this.props.eventsList[i].date.substring(0,10);
                const content = this.props.eventsList[i].content;
                //events += {title: this.props.eventsListName[i], start: this.props.eventsListDate[i]}
                list.push(
                    <View key={i} style={styles.textList}>
                        <Text>{date}</Text>
                        <Text>{text}</Text>
                        <Text style={{flex:1, flexDirection: 'column'}}
                            numberOfLines={this.state.textShown === i ? undefined : 1}>
                            <Text>{content}</Text>
                        </Text>
                        <TouchableHighlight
                            onPress={()=>{Linking.openURL('https://google.com')}}>
                            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>להרשמה לאירוע</Text>
                        </TouchableHighlight>
                        <Text style={{color: '#23a500'}}
                            onPress={() => this.toggleNumberOfLines(i)}>
                            {this.state.textShown === i ? 'show less...' : 'show more...'}
                        </Text>
                    </View>
                )  
            }
            //console.log('events array: ', events) 
        return(
            //change height to something dinamic 
            <View style={{height:500}}>
                <ScrollView ref={(ref) =>{this.scrollRef = ref}} contentContainerStyle={{flex: 1}} nestedScrollEnabled={true}>
                    <View style={{ width:'90%', margin:20, height: '60%', backgroundColor: '#f5f5f5', borderColor: '#bdbdbd', borderWidth:2, borderRadius: 10}}>
                        <FullCalendar 
                            height={250}
                            contentHeight={150}
                            plugins={[ dayGridPlugin, interactionPlugin  ]}
                            initialView="dayGridMonth"
                            events={this.props.events}
                            locale='he'
                            buttonText={{today:'היום'}}
                            direction='rtl'
                            eventClick={this.scrollFromCalendar}
                            eventColor='#22aa22'
                            />
                            {/* <EventsList
                                {...this.state}/> */}
                        <View style={{marginTop: '15%'}}>
                            {list}
                        </View>        
                    </View>
                </ScrollView>
            </View>
        )
    }   
} 

const styles = StyleSheet.create({
    textList: {
        flexDirection: 'column',
        margin: 20,
        width: '90%',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        padding: '2%',
        shadowOffset: {
            height: 1,
            width: 1
        }
    }
    })

export default EventsView;