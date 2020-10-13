import React from 'react'; 
import { StyleSheet, TextInput, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon , SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoSearchBar = ({
    onChangeText,
    value,
    onBlur
}) => {
    return (
        <View style={styles.search}>
            <SearchBar style={styles.search}
                    inputStyle={{outline: "none", color:"white", opacity:0.7 , height:20}}
                    inputContainerStyle={{outline: "none", borderRadius: 20, height:25}}
                    containerStyle={{borderRadius: 20}}
                    lightTheme='true'
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    placeholder="חיפוש"
                    onChangeText={onChangeText}
                    value={value}
                    onBlur = {onBlur}
                />
        </View>
    )
}

// class VideoSearchBar extends React.Component{
//     state = {
        
//         search: ''
//     }
//     updateSearch = async (search) =>{
//         console.log('change text')
        
//         await this.setState({ search });
//         console.log('this.state.search: ', this.state.search)
//     }

//     render(){
//         const { search } = this.state;
//         return (
//             <View style={styles.search}>
//                 <SearchBar style={styles.search}
//                         inputStyle={{outline: "none", color:"white", opacity:0.7 , height:20}}
//                         inputContainerStyle={{outline: "none", borderRadius: 20, height:25}}
//                         containerStyle={{borderRadius: 20}}
//                         lightTheme='true'
//                         placeholderTextColor="rgba(255,255,255,0.7)"
//                         ref="searchBar"
//                         placeholder="Search"
//                         onChangeText={this.updateSearch}
//                         value={search}
//                     />
//             </View>
//         )}

// }

const styles = StyleSheet.create({
})

export default VideoSearchBar;







                    //my search bar

                //     <View style={[styles.input, {flexDirection: 'row'}]}>
                //     <Icon name='search' type='font-awesome' style={{padding:3}}/>
                //     <TextInput
                //     returnKeyType="search"
                //     underlineColorAndroid ='transparent'
                //     style={[styles.input, {paddingLeft:5, outline: "none"}]}
                //     placeholderTextColor="#000"
                //     placeholder="Search"
                //     onChangeText={this.updateSearch}
                //     value={search}
                //     />    
                // </View>
                    // search:{
                    //     width: 300 ,
                    //     height: 50,
                    //     borderRadius: 5,
                    //     backgroundColor: '#acf2f0',
                    //     alignItems: 'center',
                    //     padding: 8
                    // },
                    // input:{
                    //     width: 270 ,
                    //     height: 35,
                    //     backgroundColor: '#07beb8',
                    //     borderRadius: 5,
                    // },