import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import MainScreen from './screens/MainScreen';
import AddExpenseScreen from './screens/AddExpenseScreen'
import LoginScreen from './screens/LoginScreen'

const AuthStack = createStackNavigator();



export const SignedOut = () => {

    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen}
                options={
                {headerShown: false}
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export const SignedIn = () => {

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
            options={
                {
                title: "Mis gastos",
                headerTitleAlign: 'center'
                }
            }
            />
            <Stack.Screen
            name="AddExpenseScreen"
            component={AddExpenseScreen}
            options={
                {
                title: "Nuevo gasto",
                headerTitleAlign: 'center'
                }
            }
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn,
            },
            SignedOut: {
                screen: SignedOut
            },
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    )
}
