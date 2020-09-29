import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';

class HomeMenuBar extends React.Component{

//    function HomeMenuBar(){

    navigateTo = () =>{
        this.props.navigation.navigate("BudgetComponent");
    }
   
    render(){
    
  //const { navigate } = this.props.navigation
        return (
    //   <View
    //      style={styles.container2}>
         <View 
         style={styles.menu}>
           <View
              style={styles.button}>
              <TouchableHighlight
                //onPress={() => navigate("BudgetComponent")}
                // style={styles.button}
                onPress={this.navigateTo}
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
              style={styles.button}>
              <TouchableHighlight
                onPress={() => navigate("VideoComponent")}
                // style={styles.button}
                >
                    <Text style={styles.buttonText}>video</Text>
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
         {/* </View> */}
        <StatusBar style="auto" />
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
  menu:{
    backgroundColor: '#fff',
    height: 50,
    width: 375,
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText:{
    color: '#000000'
  }
});




export default HomeMenuBar;
