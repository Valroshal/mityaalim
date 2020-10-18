import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const BottomMenuBar =({
  onChangeText,
  value,
  onBlur,
  onPressSignOut,
  onPressSettings
}) => {

        return (
            <View 
            style={styles.bottomMenu}>
              <View
                 style={styles.button}>
                 <View style={{flexDirection: 'row'}}>
                   <TouchableHighlight
                       onPress={onPressSignOut}>
                       <Text style={styles.buttonText}>יציאה</Text>
                   </TouchableHighlight>
                   <Icon name='sign-out' type='font-awesome' style={{paddingLeft:3}} />
                 </View> 
              </View>
              <View
                 style={styles.button}>
                 <View style={{flexDirection: 'row'}}>
                   <TouchableHighlight
                       
                       onPress={onPressSettings}>
                       <Text style={styles.buttonText}>הגדרות</Text>
                   </TouchableHighlight>
                   <Icon name='settings' style={{paddingLeft:3}} />   
                 </View> 
              </View>
           </View>   
            );
  }


//need camelCase in style sheet
const styles = StyleSheet.create({
    bottomMenu:{
        backgroundColor: '#ececec',
        height: '8%',
        width: '100%',
        position: 'absolute',
        right: 0,
        bottom: 0,
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
        color: '#000000'
      }
});

export default BottomMenuBar;
