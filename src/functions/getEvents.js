
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';


// need to think where to store fetched data and how can I access to it from another screen 
const getEvents = () =>{
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


  export default getEvents;


