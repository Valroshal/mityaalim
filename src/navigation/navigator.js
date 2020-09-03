import 'react-native-gesture-handler';

import LoginScreen from '../screens/Login';
import RegistrationScreen from '../screens/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


    const MyStack = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              //options={{ title: 'Welcome' }}
            />
            <Stack.Screen 
            name="Register" component={RegistrationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };


export default createStackNavigator(MyStack);

// const AppNavigator = createBottomTabNavigator({
//     Login:{
//         screen: LoginScreen,
//     },
//     Register:{
//         screen: RegistrationScreen,
//     }
// })

// export default createAppContainer(AppNavigator);