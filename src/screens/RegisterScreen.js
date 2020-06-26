import React from 'react';
import { StyleSheet, Image } from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent';
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';
import { AuthContext } from '../context/AuthContext';
import { ErrorComponent } from '../components/ErrorComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, validatePassword, validateUsername } from '../utils/Validates';


export function RegisterScreen({ navigation }) {

    const { register } = React.useContext(AuthContext);
    const [error, setError] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    function validateRegister() {
        if(validateEmail(email, setError) && validateUsername(username, setError) && validatePassword(password, setError)) {
            register(username, email, password, setError);
        }
    }

    return (
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.container} scrollEnabled={false} style={styles.view}>
 
            <Image style={styles.logo} source={require('../../resources/icon.jpg')}/>


            <ErrorComponent error={error} />

            <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} placeholder="Nombre" backgroundColor={'#46C4D7'} onChange={setUsername} />
            <TextWithIconComponent iconName="email" iconSize={50} iconColor={'#6F6F6F'} placeholder="Email" backgroundColor={'#48C7DB'} onChange={setEmail} />
            <TextWithIconComponent iconName="password" iconSize={45} iconColor={'#6F6F6F'} placeholder="Contraseña" password={true} backgroundColor={'#48C7DB'} onChange={setPassword} />
        

            <View style={styles.buttonsView}>
                <CustomButtom text='Registrarse' onPress={() => validateRegister()} type="principal" />
                <CustomButtom text='Iniciar sesion' onPress={() => navigation.navigate("LoginScreen")} type="secondary" />
            </View>


        </KeyboardAwareScrollView>
    );
}


const styles = StyleSheet.create({
    view: {
        backgroundColor: '#52E0F6',
        marginTop: '6.5%',
    },
    container: {
        backgroundColor: '#52E0F6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    buttonsView: {
        width: '100%',
        paddingTop: '3%',
    }
})