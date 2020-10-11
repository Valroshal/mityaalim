import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {searchChanged} from '../actions/index'
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import VideoSearchBar from './VideoSearchBar';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';

class VideoComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
        this.get()
    }
    
      state = {
            color: 'transparent',
            font: 'normal',
            //search: ''
            videoList: ''
        }
    
        get = async () =>{
          await fetch('http://localhost:5000/getvideo', {
              
              method: 'GET',
              headers: {
              'Accept': 'application/x-www-form-urlencoded',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*'
              },   
              }).then((res) => res.json()
              .catch(err =>{
                  console.log('happened!', err);
                  return {};
              }))
              .then((data) => {
                  console.log('parsed json: ', data);
                  this.setState({ videoList: data,  })
              
                }).catch(error => {
                  console.log("Error fetching data-----------", error);
                });     
      }    

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

        _onChangeText = async (search) =>{
            console.log('text changes on video screen', search)
            //await this.setState({ search });
            //console.log('this.state.search: ', this.state.search)
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
  const {videoList} = this.state.videoList
  console.log('videoList',this.state.videoList)
  console.log('props: ', this.props)
  //const { search } = this.state;
  const {search} = this.props
  return (
      <View
         style={styles.container2}>
          <HomeMenuBar
          VideoColorBorder = {this.state.color}
          EventsColorBorder = {'transparent'}
          BudgetColorBorder = {'transparent'}
          HomeColorBorder = {'transparent'}
          onPressBudget={() => navigate("BudgetComponent")}
          onPressEvents={() => navigate("EventsComponent")}
          onPressVideo={this.setVideoButton}
          onPressHome={() => navigate("HomeScreen")}  
          />

            
            
            <View style={styles.searchContainer}>
                <VideoSearchBar
                onChangeText = {this._onChangeText} 
                value={search}/>
            </View>
          
            <View style={{height: 50, width: '100%',}}>
                  {videoList}
            </View>
        <Text style={styles.text}>Hello Video Component!</Text>
        <StatusBar style="auto" />
        
        <BottomMenuBar
        onPressSignOut={() => navigate("Login")}
        onPressSettings={() => navigate("SettingsScreen")}
        />  
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

  searchContainer:{
    position:"absolute",
    top: '12%',
    textAlign: 'center',
    margin: 20
  },
  
});


const mapStateToProps = state => {
  return{
    search: state.search.search
  }
}

export default connect(mapStateToProps, {searchChanged})(VideoComponent);


