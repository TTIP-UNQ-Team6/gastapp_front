import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  render() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="RegisterScreen" 
                component={RegisterScreen}
                options={
                {headerShown: false}
                }
            />
            <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen}
                options={
                {headerShown: false}
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
    )}

}