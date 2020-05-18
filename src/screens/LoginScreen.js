import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image} from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent';
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';
import { AuthContext } from '../context/AuthContext';

export function LoginScreen({navigation}) {

    const { user, login } = React.useContext(AuthContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
            
            <Image
            style={styles.logo}
            source={require('../../resources/icon.jpg')}
            />

            <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} height='10%' keyboardType='default' placeholder="Usuario" backgroundColor={'#46C4D7'} onChange={setUsername} />

            <TextWithIconComponent iconName="password" iconSize={50} iconColor={'#6F6F6F'} height='10%' keyboardType='default' placeholder="Contraseña" backgroundColor={'#48C7DB'} onChange={setPassword} />

            <View style={styles.buttonsView}>
                <CustomButtom text='Iniciar sesion' onPress={() => login(username, password)}/>
                <CustomButtom text='Registrarse' onPress={() => navigation.navigate("RegisterScreen")}/>
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
        marginTop: '5%'
    }

})
