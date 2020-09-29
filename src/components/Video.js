import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';

class VideoComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
    }
    
      state = {
            color: 'white',
            font: 'normal'
        }
    
        checkColor = () =>{
          console.log('on load home', this.state.color);
          if(this.state.color == 'white')
          {
            this.setState({
              color: '#50C878',
              font: 'bold'
            })
          }
        }

    setVideoButton = () =>{
      this.setState({
        color: '#50C878',
        font: 'bold'
      })
      console.log('video', this.state.color);
      this.props.navigation.navigate("VideoComponent");
    }
  
  render(){
  const { navigate } = this.props.navigation
  return (
      <View
         style={styles.container2}>
         <View 
         style={styles.menu}>
           <View
              style={styles.button}>
              <TouchableHighlight
                onPress={() => navigate("BudgetComponent")}
                // style={styles.button}
                //onPress={this.toggleBudget}
                >
                    <Text style={styles.buttonText}>budget</Text>
              </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
              <TouchableHighlight
                onPress={() => navigate("EventsComponent")}
                // style={styles.button}
                >
                    <Text style={styles.buttonText}>events</Text>
              </TouchableHighlight>
           </View>
           <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                width: 75,
                borderBottomColor: this.state.color,
                borderBottomWidth: 2,
              }}>
              <TouchableHighlight
                onPress={this.setVideoButton}
                //onPress={() => navigate("VideoComponent")}
                // style={styles.button}
                >
                    <Text style={[styles.buttonText, {fontWeight: this.state.font}]}>video</Text>
              </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
              <TouchableHighlight
                onPress={() => navigate("HomeScreen")}
                // style={styles.button}
                >
                    <Text style={styles.buttonText}>home</Text>
              </TouchableHighlight>
           </View>
         </View>

        <Text style={styles.text}>Hello Video Component!</Text>
        <StatusBar style="auto" />
        <View 
         style={styles.bottomMenu}>
           <View
              style={styles.button}>
              <TouchableHighlight>
                  {/* //onPress={() => navigate("BudgetComponent")}> */}
                  <Text style={styles.buttonText}>sign out</Text>
              </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
              <TouchableHighlight>
                  {/* //onPress={() => navigate("BudgetComponent")}> */}
                  <Text style={styles.buttonText}>settings</Text>
              </TouchableHighlight>
           </View>
        </View>   
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
  text2:{
    fontSize: 46,
  },
  topMenu:{
    backgroundColor: '#ececec',
    height: 50,
    width: 375,
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },

  bottomMenu:{
    backgroundColor: '#ececec',
    height: 50,
    width: 375,
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button:{
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText:{
    color: '#000000'
  }
});




export default VideoComponent;
