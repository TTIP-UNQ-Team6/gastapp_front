import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButtom = (props) => {

    return(
        <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={() => props.onPress()}> 
                <Text style={styles.bottomButtonsText}>
                    {props.text}
                </Text> 
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        width: '80%',
        margin: '1%'
    },
    button: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
    },
    bottomButtonsText: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        paddingVertical: '5%'
    }
})

export default CustomButtom;