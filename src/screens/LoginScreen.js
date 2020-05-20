import React from 'react';
import { StyleSheet, Image } from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent';
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';
import { AuthContext } from '../context/AuthContext';
import { ErrorComponent } from '../components/ErrorComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export function LoginScreen({ navigation }) {

    const { login } = React.useContext(AuthContext);
    const [error, setError] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.container} scrollEnabled={false} style={styles.view}>

            
            <Image style={styles.logo} source={require('../../resources/icon.jpg')}/>
            
            <ErrorComponent error={error} />

            <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} placeholder="Usuario" backgroundColor={'#46C4D7'} onChange={setUsername} />
            <TextWithIconComponent iconName="password" iconSize={50} iconColor={'#6F6F6F'} password={true} placeholder="Contraseña" backgroundColor={'#48C7DB'} onChange={setPassword} />
        
            <View style={styles.buttonsView}>
                <CustomButtom text='Iniciar sesion' onPress={() => login(username, password, setError)} type="principal"/>
                <CustomButtom text='Registrarse' onPress={() => navigation.navigate("RegisterScreen")} type="secondary"/>
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
        paddingTop: '22%',
    }
})
