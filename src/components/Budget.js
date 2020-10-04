import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

class BudgetComponent extends React.Component{
    
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

    setBudgetButton = () =>{
      this.setState({
        color: '#50C878',
        font: 'bold'
      })
      console.log('budget', this.state.color);
      this.props.navigation.navigate("BudgetComponent");
    }

  render(){
  const { navigate } = this.props.navigation
  return (
      <View
         style={styles.container2}>
         <View 
         style={styles.topMenu}>
           <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                width: 75,
                borderBottomColor: this.state.color,
                borderBottomWidth: 2,
              }}>
                <Icon name='credit-card' type='font-awesome' />
                <TouchableHighlight
                    onPress={this.setBudgetButton}>
                        <Text style={[styles.buttonText, {fontWeight: this.state.font}]}>budget</Text>
                </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
                <Icon name='calendar' type='font-awesome' />
                <TouchableHighlight
                    onPress={() => navigate("EventsComponent")}
                    // style={styles.button}
                    >
                        <Text style={styles.buttonText}>events</Text>
                </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
                <Icon name='film' type='font-awesome' />
                <TouchableHighlight
                    onPress={() => navigate("VideoComponent")}
                    // style={styles.button}
                    >
                        <Text style={styles.buttonText}>video</Text>
                </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
                <Icon name='home' type='font-awesome' style={{fontSize:'5px'}} />
                <TouchableHighlight
                    onPress={() => navigate("HomeScreen")}>
                        <Text style={styles.buttonText}>home</Text>
                </TouchableHighlight>
           </View>
         </View>

        <Text style={styles.text}>Hello Budget Component!</Text>
        <StatusBar style="auto" />
        <View 
         style={styles.bottomMenu}>
           <View
              style={styles.button}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        onPress={() => navigate("LoginScreen")}>
                        <Text style={styles.buttonText}>sign out</Text>
                    </TouchableHighlight>
                    <Icon name='sign-out' type='font-awesome' style={{paddingLeft:3}} />
                </View>
           </View>
           <View
              style={styles.button}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight>
                        {/* //onPress={() => navigate("BudgetComponent")}> */}
                        <Text style={styles.buttonText}>settings</Text>
                    </TouchableHighlight>
                    <Icon name='settings' style={{paddingLeft:3}} />  
                </View> 
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
    height: 60,
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




export default BudgetComponent;
