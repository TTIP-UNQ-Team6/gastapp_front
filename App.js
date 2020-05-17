import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';
import MainScreen from './src/screens/MainScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen'
import { LoginScreen } from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import { AuthContext } from './src/context/AuthContext';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="MainScreen"
            component={MainScreen}
            options={
                { headerShown: false }
            }
        />
        <HomeStack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={
                { headerShown: false }
            }
        />
        <HomeStack.Screen
            name="ExpensesScreen"
            component={ExpensesScreen}
            options={
                {
                    title: "Mis gastos",
                    headerTitleAlign: 'center'
                }
            }
        />
        <HomeStack.Screen
            name="AddExpenseScreen"
            component={AddExpenseScreen}
            options={
                {
                    title: "Nuevo gasto",
                    headerTitleAlign: 'center'
                }
            }
        />
    </HomeStack.Navigator>
)

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={
                { headerShown: false }
            }
        />
        <AuthStack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={
                { headerShown: false }
            }
        />
    </AuthStack.Navigator>
)

export default () => {

    const [isLoading, setIsLogin] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLogin(false);
        }, 1000)
    }, []);
    
    const auth = React.useMemo(
        () => ({
            login: (username, password) => {
                console.log(username, password);
            },
            logout: () => {
                console.log("ayuda");
            },
            register: (username, email, password) => {
                console.log(username, email, password);
            },
        }),[],
    );

    if (isLoading) {
        return <LoadingScreen />
    };

    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer>
                <AuthStack.Navigator>
                    <AuthStack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={
                            { headerShown: false }
                        }
                    />
                    <AuthStack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen}
                        options={
                            { headerShown: false }
                        }
                    />
                </AuthStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
};