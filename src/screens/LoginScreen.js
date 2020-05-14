import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image} from 'react-native';
import TextWithIconComponent from '../components/TextWithIconComponent'
import CancelAcceptComponent from '../components/CancelAcceptComponent'
import CustomButtom from '../components/CustomButton';
import { View } from 'native-base';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
                
                <Image
                style={styles.logo}
                source={require('../../resources/icon.jpg')}
                />

                <TextWithIconComponent iconName="user" iconSize={50} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Usuario" backgroundColor={'#46C4D7'} onChange={() => console.log("cambie")} />

                <TextWithIconComponent iconName="password" iconSize={50} iconColor={'#6F6F6F'} keyboardType='default' placeholder="Contraseña" backgroundColor={'#48C7DB'} onChange={() => console.log("cambie")} />

                <View style={styles.buttonsView}>
                    <CustomButtom text='Iniciar sesion' onPress={() => console.log("Me llamaron")}/>
                    <CustomButtom text='Registrarse' onPress={() => console.log("Me llamaron")}/>
                </View>
                

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 25,
        backgroundColor: '#52E0F6',
        position: 'relative',
        flex: 1,
    },
    logo: {
      width: 220,
      height: 220,
      marginTop: 15,
      alignSelf: 'center',
    },
    buttonsView: {
        flexDirection: 'column',
        flex: 2,
        marginTop: '5%'
    }

})

export default LoginScreen;