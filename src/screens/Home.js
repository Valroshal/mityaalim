import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import HomeMenuBar from '../components/HomeMenuBar'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Icon } from 'react-native-elements';



class HomeComponent extends React.Component{
  componentDidMount(){
    this.checkColor()
    this.props.navigation.addListener('willFocus', this.load)
}
  
  state = {
        color: 'white',
        font: 'normal'
    }

  onSwipeLeft = () =>{
    this.props.navigation.navigate('VideoComponent')
  }

  onSwipeRight = () =>{
    this.props.navigation.goBack()
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

  setHomeButton = () =>{
    this.setState({
      color: '#50C878',
      font: 'bold'
    })
    console.log('home', this.state.color);
    this.props.navigation.navigate("HomeScreen");
  }
  
  render(){
  const { navigate } = this.props.navigation
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    
      // {/* guesture recognizer doesn't work! why?????? */}
      // <GestureRecognizer
      //   onSwipeLeft={this.onSwipeLeft}
      //   onSwipeRight={this.onSwipeRight}
      //   config={config}>  
      <View
         style={styles.container2}>
           
         <View 
         style={styles.topMenu}>
           <View
              style={styles.button}>
              <Icon name='credit-card' type='font-awesome' />
              <TouchableHighlight
                  onPress={() => navigate("BudgetComponent")}>
                  <Text style={styles.buttonText}>budget</Text>
              </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
                
              <Icon name='calendar' type='font-awesome' />
              <TouchableHighlight
                onPress={() => navigate("EventsComponent")}>
                    <Text style={styles.buttonText}>events</Text>
              </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
              <Icon name='film' type='font-awesome' />
              <TouchableHighlight
                onPress={() => navigate("VideoComponent")}>
                    <Text style={styles.buttonText}>video</Text>
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
                <Icon name='home' type='font-awesome' style={{}} />
                <TouchableHighlight onPress = {this.setHomeButton}>
                      <Text style={[styles.buttonText, {fontWeight: this.state.font}]}>home</Text>
                </TouchableHighlight>
                
              {/* </View> */}
           </View> 
         </View>
         

        {/* <HomeMenuBar/>  */}
        {/*  // navigation from another component doesn't work, why ????*/}
        <Text style={styles.text}>Hello Home Component!</Text>
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
                <TouchableHighlight
                    onPress={() => navigate("SettingsScreen")}>
                    <Text style={styles.buttonText}>settings</Text>
                </TouchableHighlight>
                <Icon name='settings' style={{paddingLeft:3}} />   
              </View> 
           </View>
        </View>   
      </View>
      // {/* </GestureRecognizer> */}

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




export default HomeComponent;











// const ROUTESTACK = [
//   { text: 'TAB 1', title: 'Scene' },
//   { text: 'TAB 2', title: 'Scene' },
//   { text: 'TAB 3', title: 'Scene' }
// ];

// const Scene = ({ index }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text style={{ fontSize: 20 }}>{index}</Text>
//   </View>
// );

// const ROUTES = {
//   Scene
// };

// class HomeComponent extends React.Component{
         
//   render() {
//     return (
//      <View style={{ flex: 1 }}>
//       <TopBarNav
//        routeStack={ROUTESTACK}
//        renderScene={(route, i) => {
//         let Component = ROUTES[route.title];
//         return <Component index={i} />;
//        }}
//        headerStyle={[styles.header]} 
//        labelStyle={styles.label}
//        underlineStyle={styles.underline}
//        imageStyle={styles.image}
//        sidePadding={0} 
//        inactiveOpacity={0.4}
//        fadeLabels={true}
//       />
//      </View>
//     );
//   }
// }


// //need camelCase in style sheet
// const styles = StyleSheet.create({
//   header: {
//     borderBottomWidth: 1,
//     borderColor: '#cecece',
//     backgroundColor: '#fff'
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#fff'
//   },
//   image: {
//     height: 20,
//     width: 20,
//     tintColor: '#e6faff'
//   },
//   underline: {
//     height: 1,
//     backgroundColor: '#1c1c1c',
//     width: 40
//   }
// });

