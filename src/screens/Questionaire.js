import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import HomeMenuBar from '../components/HomeMenuBar';
import BottomMenuBar from '../components/BottomMenuBar';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Icon } from 'react-native-elements';
import QuestionInput from '../components/QuestionInput';
import validate from '../components/validation';
import {Picker} from '@react-native-picker/picker';

const ScreenHeight = Dimensions.get("window").height;

class Questionaire extends React.Component{
    state = {
        familyNum: 1,
        pets: 'כן',
        location: 'צפון',
        settlement: 'עיר',
        home: 'שכירות',
        payment: null,
        car: 'כן',
        meal: 'סופר גדול'
    }

    render() {
        const { navigate } = this.props.navigation
        
        return (
            <View style = {styles.container}>
                <Text
                    style={{textAlign: 'center', fontSize: 20}}
                    >פרטי משפחה</Text>
                <View style={{paddingTop:20}}> 
                    <View>
                        <Text style={styles.text}>כמות נפשות במשפחה</Text>
                    </View>
                    
                <Picker
                    selectedValue={this.state.familyNum}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({familyNum: itemValue})    
                    }>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                </Picker>
                </View>
                <View> 
                    <View>
                        <Text style={styles.text}>האם יש חיות מחמד</Text>
                    </View>
                    <Picker
                    selectedValue={this.state.pets}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({pets: itemValue})    
                    }>
                    <Picker.Item label="כן" value="כן" />
                    <Picker.Item label="לא" value="לא" />
                </Picker>
                </View>
                <Text
                    style={{textAlign: 'center', fontSize: 20, paddingTop:20}}
                    >מקום מגורים
                </Text>
                <View> 
                    <View style={{paddingTop:20}}>
                        <Text style={styles.text}>איזור המגורים בארץ</Text>
                    </View>
                    <Picker
                    selectedValue={this.state.location}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({location: itemValue})    
                    }>
                    <Picker.Item label="צפון" value="צפון" />
                    <Picker.Item label="מרכז" value="מרכז" />
                    <Picker.Item label="דרום" value="דרום" />
                </Picker>
                </View>
                <View> 
                    <View>
                        <Text style={styles.text}>סוג ישוב</Text>
                    </View>
                    <Picker
                    selectedValue={this.state.settlement}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({settlement: itemValue})    
                    }>
                    <Picker.Item label="עיר" value="עיר" />
                    <Picker.Item label="מושב" value="מושב" />
                    <Picker.Item label="קיבוץ" value="קיבוץ" />
                </Picker>
                </View>
                <View> 
                    <View>
                        <Text style={styles.text}>סוג בית</Text>
                    </View>
                    <Picker
                    selectedValue={this.state.home}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({home: itemValue})    
                    }>
                    <Picker.Item label="שכירות" value="שכירות" />
                    <Picker.Item label="בעלות" value="בעלות" />
                </Picker>
                </View>
                <View> 
                    <View>
                        <Text style={styles.text}>תשלום חודשי בשקלים</Text>
                        <QuestionInput 
                        />
                    </View>    
                </View>
                <Text
                    style={{textAlign: 'center', fontSize: 20, paddingTop:20}}
                    >שונות
                </Text>
                <View> 
                    <View style={{paddingTop:20}}>
                        <Text style={styles.text}>האם ישרכב בבעלותך</Text>
                    </View>
                    <Picker
                    selectedValue={this.state.car}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({car: itemValue})    
                    }>
                    <Picker.Item label="כן" value="כן" />
                    <Picker.Item label="לא" value="לא" />
                </Picker>
                </View>
                <View> 
                    <View>
                        <Text style={styles.text}>מקום לקניות אוכל יומיום</Text>
                    </View>
                    <Picker
                    selectedValue={this.state.meal}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({meal: itemValue})    
                    }>
                    <Picker.Item label="סופר גדול" value="סופר גדול" />
                    <Picker.Item label="מכולת ליד הבית" value="מכולת ליד הבית" />
                </Picker>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:25,
        marginTop: '5%',
        //height: ScreenHeight,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        marginBottom: '8%',
    },
    text:{
        padding:10, 
        fontSize: 16
    },
    picker:{
        height: 30, 
        width: '90%', 
        alignSelf:'flex-end'
    }
});

export default Questionaire;


// let familyQues = [];
//         const family = ['מצב משפחתי', 'מספר ילדים', 'חיות מחמד']
//         for(let i=0; i<family.length; i++)
//         {
//             let text = family[i]
//             familyQues.push(
//                 <View key={i}> 
//                     <View>
//                         <Text>{text}</Text>
//                     </View>
//                     <QuestionInput
//                     />
//                 </View>
//             )
//         }