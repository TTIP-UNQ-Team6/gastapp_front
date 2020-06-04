import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/screens/LoadingScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import MainScreen from './src/screens/MainScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import AddIncomeScreen from './src/screens/AddIncomeScreen';
import EditExpenseScreen from './src/screens/EditExpenseScreen';
import EditIncomeScreen from './src/screens/EditIncomeScreen';
import UserScreen from './src/screens/UserScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { AuthContext } from './src/context/AuthContext';
import { loginUser, registerUser } from './src/gastappService';

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
            component={HistoryScreen}
            options={
                {
                    title: "Mis gastos",
                    headerTitleAlign: 'center'
                }
            }
        />
        <HomeStack.Screen
            name="IncomesScreen"
            component={HistoryScreen}
            options={
                {
                    title: "Mis ingresos",
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
        <HomeStack.Screen
            name="AddIncomeScreen"
            component={AddIncomeScreen}
            options={
                {
                    title: "Nuevo ingreso",
                    headerTitleAlign: 'center'
                }
            }
        />
        <HomeStack.Screen
            name="EditExpenseScreen"
            component={EditExpenseScreen}
            options={
                {
                    title: "Editar gasto",
                    headerTitleAlign: 'center',
                }
            }
        />
        <HomeStack.Screen
            name="EditIncomeScreen"
            component={EditIncomeScreen}
            options={
                {
                    title: "Editar ingreso",
                    headerTitleAlign: 'center'
                }
            }
        />
        <HomeStack.Screen
            name="UserScreen"
            component={UserScreen}
            options={
                {
                    title: "Mi perfil",
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

    console.disableYellowBox = true;

    const [isLoading, setIsLogin] = React.useState(true);
    const [user, setUser] = React.useState({
        "_id": {
          "$oid": "5ec2fdc0899e474b23693dc6",
        },
        "email": "mauro@mauro.com",
        "name": "Mauro",
        "password": "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5",
      });

    React.useEffect(() => {
        setTimeout(() => {
            setIsLogin(false);
        }, 1000)
    }, []);
    
    var auth = React.useMemo(
        () => ({
            login: (username, password, errorCallback) => {
                loginUser(username, password).then(res => handleResponse(res, errorCallback)).catch(e => errorCallback(e.message));
            },
            logout: () => {
                setUser(null);
            },
            register: (username, email, password, errorCallback) => {
                registerUser(username, email, password).then(res => handleResponse(res, errorCallback)).catch(e => errorCallback(e.message));
            },
        }),[],
    );

    function handleResponse(res, errorCallback) {
        if(String(res.status).charAt(0) == 2) {
            setUser(res.data);
        }
        else {
            errorCallback(res.data.description);
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