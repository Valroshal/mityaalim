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
