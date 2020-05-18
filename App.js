import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';
import MainScreen from './src/screens/MainScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen'
import { LoginScreen } from './src/screens/LoginScreen'
import { RegisterScreen } from './src/screens/RegisterScreen'
import { AuthContext } from './src/context/AuthContext';
import { loginUser, registerUser } from './src/gastappService'

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = (user) => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="MainScreen"
            options={
                { headerShown: false }
            }
        >
             {props => <MainScreen {...props} user={user} />}
        </HomeStack.Screen>
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
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLogin(false);
        }, 1000)
    }, []);
    
    var auth = React.useMemo(
        () => ({
            login: (username, password) => {
                loginUser(username, password).then(res => handleResponse(res));
            },
            logout: () => {
                setUser(null);
            },
            register: (username, email, password) => {
                registerUser(username, email, password).then(res => handleResponse(res));
            },
        }),[],
    );

    function handleResponse(res) {
        if(String(res.status).charAt(0) == 2) {
            setError(null);
            setUser(res.data);
        }
        else {
            setError(res.description)
        }
    }

    if (isLoading) {
        return <LoadingScreen />
    };

    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer >
                {user ?
                    <HomeStackScreen user={user}/>
                :
                    <AuthStackScreen/>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
};