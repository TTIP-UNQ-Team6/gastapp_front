import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image} from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent'
import CancelAcceptComponent from '../components/CancelAcceptComponent'
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';
import { AuthContext } from '../context/AuthContext';

export function RegisterScreen({navigation}) {
    
    const { register } = React.useContext(AuthContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
            
            <Image
            style={styles.logo}
            source={require('../../resources/icon.jpg')}
            />

            <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} height='9%' keyboardType='default' placeholder="Usuario" backgroundColor={'#46C4D7'} onChange={setUsername} />

            <TextWithIconComponent iconName="email" iconSize={50} iconColor={'#6F6F6F'} height='9%' keyboardType='default' placeholder="Email" backgroundColor={'#48C7DB'} onChange={setEmail} />

            <TextWithIconComponent iconName="password" iconSize={50} iconColor={'#6F6F6F'} height='9%' keyboardType='default' placeholder="Contraseña" backgroundColor={'#48C7DB'} onChange={setPassword} />

            <View style={styles.buttonsView}>
                <CustomButtom text='Registrarse' onPress={() => register(username, email, password) }/>
                <CustomButtom text='Iniciar sesion' onPress={() => navigation.navigate("LoginScreen")}/>
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
      alignSelf: 'center',
    },
    buttonsView: {
        flexDirection: 'column',
        flex: 2,
        marginTop: '5%',
    }

})