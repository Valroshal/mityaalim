import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import i18n from '../multilang/i18n';

const HomeMenuBar =({
  onPressHome,
  onPressVideo,
  onPressEvents,
  onPressBudget,
  HomeColorBorder,
  VideoColorBorder,
  EventsColorBorder,
  BudgetColorBorder,
}) => {

        return (
         <View 
         style={styles.menu}>
           <View
              style={[styles.button, {borderBottomColor: BudgetColorBorder, borderBottomWidth: 2,}]}>
              <Icon name='credit-card' type='font-awesome' />
              <TouchableHighlight
                  onPress={onPressBudget}>
                  <Text style={styles.buttonText}>{i18n.t('menu.budgetTab')}</Text>
              </TouchableHighlight>
           </View>
           <View
              style={[styles.button, {borderBottomColor: EventsColorBorder, borderBottomWidth: 2,}]}>
              <Icon name='calendar' type='font-awesome' />
              <TouchableHighlight
                  onPress={onPressEvents}>
                  <Text style={styles.buttonText}>{i18n.t('menu.eventTab')}</Text>
              </TouchableHighlight>
           </View>
           <View
              style={[styles.button, {borderBottomColor: VideoColorBorder, borderBottomWidth: 2,}]}>
                
              <Icon name='film' type='font-awesome' />
              <TouchableHighlight
                  onPress={onPressVideo}>
                  <Text style={styles.buttonText}>{i18n.t('menu.videoTab')}</Text>
              </TouchableHighlight>
           </View>
           <View
              style={[styles.button, {borderBottomColor: HomeColorBorder, borderBottomWidth: 2,}]}>
              
              <Icon name='home' type='font-awesome' style={{}} />
              <TouchableHighlight
                  onPress={onPressHome}>
                     
                  <Text style={styles.buttonText}>{i18n.t('menu.homeTab')}</Text>
              </TouchableHighlight>
           </View>
         {/* </View> */}
        <StatusBar style="auto" />
      </View>
      
    );
  }


//need camelCase in style sheet
const styles = StyleSheet.create({
  
  text:{
    //color:'#fff',
    fontSize: 26,
  },
  text2:{
    fontSize: 46,
  },
  menu:{
    backgroundColor: '#ececec',
    height: '10%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowRadius: 6,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  button:{
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText:{
    color: '#000000',
    //fontFamily: 'notoserif'
  }
});

export default HomeMenuBar;
