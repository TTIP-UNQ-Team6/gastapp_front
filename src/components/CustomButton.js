import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButtom = (props) => {
    const styles = props.type == "secondary" ? secondaryStyles : principalStyles;

    return(
        <View style={styles.view}>
            <TouchableOpacity style={props.buttonStyle || styles.button} onPress={() => props.onPress()}> 
                <Text style={styles.buttonText}>
                    {props.text}
                </Text> 
            </TouchableOpacity>
        </View>
    );

}

const principalStyles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        width: '80%',
        margin: '1%',
    },
    button: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        paddingVertical: '4%'
    }
})

const secondaryStyles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        width: '80%',
        margin: '1%',
    },
    button: {
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: '1%',
        textDecorationLine: 'underline'
    }
})

export default CustomButtom;