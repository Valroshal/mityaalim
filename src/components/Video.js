import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {searchChanged} from '../actions/index'
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import VideoSearchBar from './VideoSearchBar';

class VideoComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
    }
    
      state = {
            color: 'white',
            font: 'normal',
            search: ''
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

        _onChangeText = async (search) =>{
            console.log('text changes on video screen')
            await this.setState({ search });
            console.log('this.state.search: ', this.state.search)
            await this.props.searchChanged(search);
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
  console.log('props: ', this.props)
  const { search } = this.state;
  return (
      <View
         style={styles.container2}>
          
            <View 
            style={styles.topMenu}>
              <View
                  style={styles.button}>
                    <Icon name='credit-card' type='font-awesome' />
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
                    <Icon name='calendar' type='font-awesome' />
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
                    <Icon name='film' type='font-awesome' />
                    <TouchableHighlight
                        onPress={this.setVideoButton} >
                        <Text style={[styles.buttonText, {fontWeight: this.state.font}]}>video</Text>
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
            
            <View style={styles.searchContainer}>
                <VideoSearchBar
                onChangeText = {this._onChangeText} 
                value={search}/>
            </View>
          

        <Text style={styles.text}>Hello Video Component!</Text>
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
    height: '10%',
    width: '100%',
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
    width: '100%',
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
  },
  searchContainer:{
    position:"absolute",
    top: '12%',
    textAlign: 'center',
    margin: 20
  },
  
});




export default connect(null, {searchChanged})(VideoComponent);
