import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent';
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';
import { AuthContext } from '../context/AuthContext';
import { ErrorComponent } from '../components/ErrorComponent';

export function LoginScreen({ navigation }) {

    const { login } = React.useContext(AuthContext);
    const [error, setError] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>

            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../../resources/icon.jpg')}/>
            </View>
            
            <ErrorComponent error={error} />

            <View style={styles.inputsView}>
                <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Usuario" backgroundColor={'#46C4D7'} onChange={setUsername} />
                <TextWithIconComponent iconName="password" iconSize={50} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Contraseña" backgroundColor={'#48C7DB'} onChange={setPassword} />
            </View>
            <View style={styles.buttonsView}>
                <CustomButtom text='Iniciar sesion' onPress={() => login(username, password, setError)} type="principal"/>
                <CustomButtom text='Registrarse' onPress={() => navigation.navigate("RegisterScreen")} type="secondary"/>
            </View>


        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: '6.5%',
        backgroundColor: '#52E0F6',
        position: 'relative',
        flex: 1,
    },
    logo: {
        width: 220,
        height: 220,
        marginTop: '0%',
    },
    logoView: {
        flex: 6,
        alignSelf: 'center',
    },
    buttonsView: {
        flexDirection: 'column',
        flex: 3,
        marginTop: '5%',
        justifyContent: 'flex-end',
    },    
    inputsView: {
        flex: 3.5,
        marginBottom: 10
    }
})
