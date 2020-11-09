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

    componentDidMount(){
        //this.get();
        
    }

    
    componentDidUpdate(){
        
        //while (res != ''){
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
        //}
        
        
    }

    state = {
        eventName: '',
        textShown: -1,
        eventsListName: ['All Day Event1', 'Long Event2', 'All Day Event3', 'Long Event4', 'All Day Event5', 'Long Event6', 'Long Event7', 'All Day Event11', 'Long Event11'],
        eventsListDate: ['2020-10-21', '2020-10-22', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27', '2020-10-28', '2020-10-29'],
        events:[
            {
                title: 'All Day Event1',
                start: '2020-10-21'
            },
            {
                title: 'Long Event2',
                start: '2020-10-22',
                
            },
            {
              title: 'All Day Event3',
              start: '2020-10-23'
            },
            {
                title: 'Long Event4',
                start: '2020-10-24',
                
            },
            {
              title: 'All Day Event5',
              start: '2020-10-25'
            },
            {
                title: 'Long Event6',
                start: '2020-10-26',
                
            },
            {
                title: 'Long Event7',
                start: '2020-10-27',
                
            },
            {
              title: 'All Day Event11',
              start: '2020-10-28'
            },
            {
                title: 'Long Event11',
                start: '2020-10-29',
                
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

    executeScroll = (i) =>{ 
        
        for(let j=0; j<this.state.eventsListName.length; j++){
            if(this.props.search.toLowerCase() == this.state.eventsListName[j].toLowerCase())
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
        for(let j=0; j<this.state.eventsListName.length; j++){
            if(name.toLowerCase() == this.state.eventsListName[j].toLowerCase())
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
            for(let i=0; i<this.state.eventsListName.length; i++)
            //for(let i=this.state.events.length-1; i>=0; i--) //from the most recent to old, need to check on db
                {
                const text = this.state.eventsListName[i];
                const date = this.state.eventsListDate[i];
                list.push(
                    <View key={i} style={styles.textList}>
                        <Text>{date}</Text>
                        <Text>{text}</Text>
                        <Text style={{flex:1, flexDirection: 'column'}}
                            numberOfLines={this.state.textShown === i ? undefined : 1}>
                            <Text>jfgkfdjgld jkljfls iuoiuoiuo oiuoiuijkajdalk iuouuouou skdhaduoerjdkzch987w98rjhsdvkj ur98797xuvxhv</Text>
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
                            events={this.state.events}
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