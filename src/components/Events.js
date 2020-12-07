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
import getEvents from '../functions/getEvents';

class EventsComponent extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
        getEvents().then(async (data) => {
              console.log('parsed json: ', data);
              if (data != null){
                for(let i=0; i<data.length; i++)
                {
                  this.setState({
                    eventsList:  [...this.state.eventsList, data[i]], 
                    eventsListName: [...this.state.eventsListName, data[i].name],
                    eventsListDate:[...this.state.eventsListDate, data[i].date],
                    eventsListContent: [...this.state.eventsListDate, data[i].content]
                  })
                }
                //await console.log('eventsList in Events.js: ', this.state.eventsList)
                await this.setEvents();
                //await console.log('events in Events.js', this.state.events)
              }
            }).catch(error => {
              console.log("Error fetching data-----------", error);
            });       
    }

    setEvents = () =>{
        let events=[];
        for(let i=0; i< this.state.eventsList.length; i++){
          let obj = {title: this.state.eventsList[i].name, start: this.state.eventsList[i].date.substring(0,10)}
          events.push(obj)
        }
      this.setState ({
        events: events
      })
    }

    state = {
          search: 'All Day Event1',
          button: '',
          color: 'transparent',
          font: 'normal',
          date: new Date(),
          eventsList:[],
          eventsListContent: [],
          eventsListName: ['All Day Event1', 'Long Event2', 'All Day Event3', 'Long Event4', 'All Day Event5', 'Long Event6', 'Long Event7', 'All Day Event11', 'Long Event11'],
          eventsListDate: ['2020-10-21', '2020-10-22', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27', '2020-10-28', '2020-10-29'],
          events:[]
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

    
    // 

  render(){
  const { navigate } = this.props.navigation
  const len = this.state.events.length;
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
          
          <View style={styles.searchContainer}>
            <VideoSearchBar
            onChangeText = {this._onChangeText} 
            value={this.state.search}/>
          </View>

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



//get = () =>{
  //   fetch('http://localhost:5000/getevent', {
        
  //       method: 'GET',
  //       headers: {
  //       'Accept': 'application/x-www-form-urlencoded',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Access-Control-Allow-Origin': '*'
  //       },   
  //       }).then((res) => res.json())
  //       .catch(err =>{
  //           console.log('happened!', err);
  //           return {};
  //       })
  //       .then( (data) => {
  //           console.log('parsed json: ', data);
  //           if (data != null){
              
  //             for(let i=0; i<data.length; i++)
  //             {
  //               this.setState({
  //                 eventsList: data, 
  //                 eventsListName: [...this.state.eventsListName, data[i].name],
  //                 eventsListDate:[...this.state.eventsListDate, data[i].date_added],
  //                  })
  //             } 
  //           }
            
        
  //         }).catch(error => {
  //           console.log("Error fetching data-----------", error);
  //         });     
  // }    