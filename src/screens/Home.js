import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text,TouchableOpacity, View, Image, KeyboardAvoidingView, Dimensions, TouchableHighlight } from 'react-native';


//import TopBarNav from 'top-bar-nav';



class HomeComponent extends React.Component{
  
//   state = {
//         showBudget: false,
//         showVideo: false,
//         showEvent: false,
//         showHome: true
//     }
  
  
//   toggleBudget = () =>{
//     console.log('budget pressed')
//     this.setState({
//         showBudget: true,
//         showVideo: false,
//         showEvent: false,
//         showHome: false
//     });
//     if(this.state.showBudget)
//       {
//         return(
//       <View>
//         <Text style={styles.text2}>Hello Budget Component!</Text>
//         <StatusBar style="auto" />
//       </View>
//       )
//     }else{
//       return null;
//     }
// }

// toggleHome = () =>{
//   console.log('budget pressed')
//   this.setState({
//         showBudget: false,
//         showVideo: false,
//         showEvent: false,
//         showHome: true
//   });
//   if(this.state.showHome)
//     {
//       return(
//     <View>
//       <Text style={styles.text2}>Hello Home Component!</Text>
//       <StatusBar style="auto" />
//     </View>
//     )
//   }else{
//     return null;
//   }
// }


  render(){
  const { navigate } = this.props.navigation
  return (
      <View
         style={styles.container2}>
         <View 
         style={styles.menu}>
           <View
              style={styles.button}>
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
              <TouchableHighlight
                onPress={() => navigate("BudgetComponent")}
                // style={styles.button}
                >
                    <Text style={styles.buttonText}>events</Text>
              </TouchableHighlight>
           </View>
           <View
              style={styles.button}>
              <TouchableHighlight
                onPress={() => navigate("BudgetComponent")}
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
         </View>

        <Text style={styles.text}>Hello Home Component!</Text>
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

