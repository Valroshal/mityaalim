import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {searchChanged} from '../actions/index'
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, WebView, Text, ScrollView, Linking , View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import VideoSearchBar from './VideoSearchBar';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';
//import { WebView } from 'react-native-webview';
//import {YouTube} from 'react-native-youtube';

class VideoComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
        this.get()
    }
    
      state = {
            color: 'transparent',
            font: 'normal',
            videoList: [],
            videoListLink: [],
            videoListId: [],
            videoListName: [],
            videoListDate: [],
        }
    
        get = () =>{
          fetch('http://localhost:5000/getvideo', {
              
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
                        videoList: data, 
                        videoListLink: [...this.state.videoListLink, data[i].link],
                        videoListId:[...this.state.videoListId, data[i].id],
                        videoListName:[...this.state.videoListName, data[i].name],
                        videoListDate:[...this.state.videoListDate, data[i].date_added],
                         })
                    } 
                  }
                  
              
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
  const {search} = this.props
  if(this.state.videoList[0] == null){
    console.log('loading')
    //return (<Loader/>)
  }
  let list = [];
    for(let i=0; i<this.state.videoListId.length; i++)
    {
      list.push(
        <View key={i} style={styles.list}>        
                <Text 
                  numberOfLines={1} 
                  style={{ fontWeight: 'bold'}}>{this.state.videoListName[i]}</Text>
                <Text 
                  numberOfLines={1} 
                  style={{ textDecorationLine: 'underline', color: 'blue'}}
                  onPress={() => Linking.openURL(this.state.videoListLink[i])}
                >{this.state.videoListLink[i]}</Text>
                <Text style={{}}>{this.state.videoListDate[i]}</Text>
        </View>
      )
    }
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
            
            {/* <ScrollView style={{margin:20}} >
                {list}
            </ScrollView> */}

            {/* <ScrollView style={{margin:20}} >  */}
            <View style={{flex: 1, height:250, width:350, margin:20}}> 
              <WebView
                //style={{flex: 1, height:250, width:350,}}
                //javaScriptEnabled={true}
                //domStorageEnabled={true}
                //source={{uri: 'https://www.youtube.com/embed/FkvEQjbhij4'}}
                source={{ html: "<iframe src=\"https://www.youtube.com/embed/jiVDV8-MQes\" frameborder=\"0\" allowfullscreen></iframe>" }}
                />  
            </View>

            {/* source={{ html: "<html><body>Look Ma' a video! <br /> <iframe width='560' height='315' src='https://www.youtube.com/embed/FkvEQjbhij4' frameborder='0' allowfullscreen></iframe></body></html>" }}

                          //source={{uri: 'https://www.youtube.com/embed/'+this.state.pictureData.idVideo }} */}
            {/* </ScrollView> */}

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
    height:'100%',
    width:'100%'
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
  
  list:{
    flexDirection: 'column',
    margin:10, 
    height: '20%', 
    width:'90%', 
    borderColor: '#000', 
    borderWidth: 2
  }
});


const mapStateToProps = state => {
  return{
    search: state.search.search
  }
}

export default connect(mapStateToProps, {searchChanged})(VideoComponent);


 {/* <YouTube
                videoId="FkvEQjbhij4" // The YouTube video ID
                play={true} // control playback of video with true/false
                //fullscreen // control whether the video should play in fullscreen or inline
                //loop // control whether the video should loop when ended
                //onReady={e => this.setState({ isReady: true })}
                //onChangeState={e => this.setState({ status: e.state })}
                //onChangeQuality={e => this.setState({ quality: e.quality })}
                //onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
              /> */}