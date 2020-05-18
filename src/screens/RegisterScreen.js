import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent'
import CancelAcceptComponent from '../components/CancelAcceptComponent'
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';
import { AuthContext } from '../context/AuthContext';
import { ErrorComponent } from '../components/ErrorComponent';

export function RegisterScreen({ navigation }) {

    const { register } = React.useContext(AuthContext);
    const [error, setError] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    function validateRegister() {
        if (!validateUsername()) {
            setError("El nombre debe tener entre 2 y 15 digitos.");
            return;
        }
        if (!validateEmail()) {
            setError("Por favor, ingrese un mail valido.");
            return;
        }
        if (!validatePassword()) {
            setError("La contraseña debe tener entre 5 y 20 digitos.");
            return;
        }

        register(username, email, password, setError)
    }

    function validateEmail() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        return re.test(email);
    }

    function validatePassword() {
        const re = /^.{5,20}/;
        return re.test(password);
    }

    function validateUsername() {
        const re = /^.{2,15}/;
        return re.test(username);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
 
 
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../../resources/icon.jpg')}/>
            </View>

            <ErrorComponent error={error} />

            <View style={styles.inputsView}>
                <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Nombre" backgroundColor={'#46C4D7'} onChange={setUsername} />
                <TextWithIconComponent iconName="email" iconSize={50} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Email" backgroundColor={'#48C7DB'} onChange={setEmail} />
                <TextWithIconComponent iconName="password" iconSize={45} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Contraseña" backgroundColor={'#48C7DB'} onChange={setPassword} />
            </View>

            <View style={styles.buttonsView}>
                <CustomButtom text='Registrarse' onPress={() => validateRegister()} type="principal" />
                <CustomButtom text='Iniciar sesion' onPress={() => navigation.navigate("LoginScreen")} type="secondary" />
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
        flex: 8,
        alignSelf: 'center',
    },
    buttonsView: {
        flexDirection: 'column',
        flex: 3,
        marginTop: '5%',
        justifyContent: 'flex-end',
    },
    inputsView: {
        flex: 7,
        marginBottom: 10
    }

})