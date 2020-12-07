import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {searchChanged} from '../actions/index';
//import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { Platform,StatusBar, StyleSheet, Text, ScrollView, Linking , View, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import VideoSearchBar from './VideoSearchBar';
import BottomMenuBar from '../components/BottomMenuBar';
import HomeMenuBar from '../components/HomeMenuBar';
import { WebView } from 'react-native-webview';
//import {YouTube} from 'react-native-youtube';
import image from '../images/43118.jpg';
import getVideo from '../functions/getVideo';

class VideoComponent extends React.Component{
    
    componentDidMount(){
        this.checkColor()
        this.props.navigation.addListener('willFocus', this.load)
        getVideo().then( (data) => {
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
    
      state = {
            color: 'transparent',
            font: 'normal',
            videoList: [],
            videoListLink: [],
            videoListId: [],
            videoListName: [],
            videoListDate: [],
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
  let video_id_arr = [];
    for(let i=0; i<this.state.videoListId.length; i++)
    {
      let url = this.state.videoListLink[i]
      let video_id = url.split('v=')[1];
      var ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
        video_id_arr[i] = video_id.substring(0, ampersandPosition);
      }
      if(search == ''){
        list.push(
          <View key={i} style={styles.list}>        
                  <Text 
                    numberOfLines={1} 
                    style={{ fontWeight: 'bold'}}>{this.state.videoListName[i]}</Text>
                  <View style={{flex: 1, height:250, width:350, margin:20}}> 
                    <WebView
                      //domStorageEnabled={true}
                      javaScriptEnabled={true}
                      scrollEnabled={false}
                      allowsFullscreenVideo={true}
                      source={{uri: 'https://www.youtube.com/embed/' + video_id_arr[i]}}
                      /> 
                  </View>
          </View>
        )
      }else 
      {if(this.state.videoListName[i].includes(search))
          
          {
            list.push(
              <View key={i} style={styles.list}>        
                      <Text 
                        numberOfLines={1} 
                        style={{ fontWeight: 'bold'}}>{this.state.videoListName[i]}</Text>
                      <View style={{flex: 1, height:250, width:350, margin:20}}> 
                        <WebView
                          //domStorageEnabled={true}
                          javaScriptEnabled={true}
                          scrollEnabled={false}
                          allowsFullscreenVideo={true}
                          source={{uri: 'https://www.youtube.com/embed/' + video_id_arr[i]}}
                          /> 
                      </View>
              </View>
            )
          
        }
      }

      
    }
  return (
    <ImageBackground source={image} style={styles.image} imageStyle= {{opacity:0.2}}>
      <View
         style={[styles.container2, {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
           <StatusBar style="auto" />
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
            
            <ScrollView style={styles.scroll} >
                {list}
            </ScrollView>
        
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
    top: '15%',
    textAlign: 'center',
    
  },
  
  list:{
    flexDirection: 'column',
    margin:10, 
    //height: '20%', 
    width:'90%', 
    //borderColor: '#000', 
    //borderWidth: 2
  },
  scroll:{
    marginTop:'30%',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});


const mapStateToProps = state => {
  return{
    search: state.search.search
  }
}

export default connect(mapStateToProps, {searchChanged})(VideoComponent);
