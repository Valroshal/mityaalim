import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { createRef, useRef } from 'react'; 
import { StyleSheet,ScrollView, Text, TouchableWithoutFeedback, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import FullCalendar from '@fullcalendar/react';
import {
    ScrollIntoView, // enhanced View container
    wrapScrollView, // simple wrapper, no config
    wrapScrollViewConfigured, // complex wrapper, takes a config
  } from 'react-native-scroll-into-view';
//import getEvents from '../functions/getEvents';

//how to import function and use it here




class EventsList extends React.Component{

    constructor(){
        super();
        //global.search = ''
        this.myRefs = [];;
    }

    setRef = (ref) => {
        this.myRefs.push(ref);
      };

    componentDidMount(){
        //getEvents();
    }

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

    executeScroll = (i, x, y) =>{ 
        console.log('in execute scroll')
        //this.myRefs[i].scrollTo({x: x, y: y, animated: true})
        this.myRefs[i].scrollToEnd()
    };

    toggleNumberOfLines = i => {
        this.setState({
        textShown: this.state.textShown === i ? -1 : i,
        });
    };

    render(){
            let list = [];
            for(let i=0; i<this.state.events.length; i++)
                {
                const text = this.state.eventsListName[i];
                const date = this.state.eventsListDate[i];
                list.push(
                    <ScrollView key={i} ref={this.setRef} style={styles.textList} 
                    contentContainerStyle={{justifyContent: 'space-between', flex:1}}
                    nestedScrollEnabled={true}>
                        <TouchableHighlight 
                            onPress={() => this.executeScroll(i,100,100)}>   
                            <Text>{date}</Text>
                        </TouchableHighlight>
                        <Text 
                            numberOfLines={this.state.textShown === i ? undefined : 3}>
                            {text} 
                        </Text>
                        <Text 
                            onPress={() => this.toggleNumberOfLines(i)}
                            style={{color:'red'}}>{this.state.textShown === i ? 'show less...' : 'show more...'}</Text>
                    </ScrollView>

                )  
            }  
            return(
                <TouchableWithoutFeedback>
                <View>
                    
                    {list}

                </View>
                </TouchableWithoutFeedback>
            )    
        }
}

const styles = StyleSheet.create({
    textList: {
        flexDirection: 'column',
        margin: 20,
        width: '90%'
        }
    })
    
    export default EventsList;
    
    // scrollToRef = (ref) => {
    //     console.log('ref ', ref.current)
    //     //const  offsetTop  = this.myRefs.current.offsetTop
    //     //window.scrollTo(0, ref.current.offsetTop)
    //     window.scrollTo(0, ref.current.getBoundingClientRect().top)
    // };

    //         this.refs = items.map(React.createRef())
// render() {
//     return <View ref={this.myRefs[i]} />;
//   }
// If (!this.refs) … create refs..
            // if (!this.refs)
            // {
            //     this.refs = this.state.events.map(React.createRef())
            // }
            
            // <View key={i} id = {} ref={el => this[`${id}Ref`].current[i]} style={styles.textList}>
                    // <View key={i} ref={this.MyRefs[i]} style={styles.textList}>


                    // focusTextInput(i) {
    //     // Explicitly focus the text input using the raw DOM API
    //     // Note: we're accessing "current" to get the DOM node
    //     this.myRefs[i].current.focus();  }


    // executeScroll = (i) =>{ 
    //     //console.log('from execute scroll refs: ',this.myRefs)
    //     //console.log('from execute scroll')
    //     //console.log('myRef', this.myRef)
    //     // if(this.myRefs.length > 0)
    //     //     {
    //     //         console.log('in if scrollToRef current ref: ', this.myRefs[i].current)
    //     //         //this.scrollToRef(this.myRefs[i].current)
    //     //         this.scrollToIndex(i)
    //     //     }
    //     // else{
    //     //         console.log('in else')
    //     //     }
    //     //this.scrollToRef(this.myRef[i].current)
    //     this.scrollToIndex(i)
    // };


    //myRefs = [];
    

    // constructor(){
    //     //let events = [{},{}];
    //     //events.map((event, idx)=> {this.${idx}Ref= React.createRef()})
    //     //console.log('in constructor')
    //     super();
        
    //     global.search = ''
    //     this.myRef = React.createRef();
    //     //this.myRefs = [];
    //     //console.log('props state in const',this.props.state)
    //     // for(let i=0; i<this.props.state.events.length; i++)
    //     // {
    //     //     this.myRefs[i] = React.createRef();
    //     // }
    //     //console.log('in const',this.myRefs)
    // }
