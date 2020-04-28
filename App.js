import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';
import MainScreen from './src/screens/MainScreen';


const Stack = createStackNavigator();


const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen}
          options={
            {headerShown: false}
          }
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={
            {headerShown: false}
          }
        />
        <Stack.Screen 
          name="ExpensesScreen" 
          component={ExpensesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
  },
});

export default Main;