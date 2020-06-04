import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const CancelAcceptComponent = (props) => {
    return (
        <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.bottomButtons} onPress={() => props.onCancel()}> 
                <Text style={styles.bottomButtonsText}>
                    Cancelar
                </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButtons} onPress={() => props.onAccept()}> 
                <Text style={styles.bottomButtonsText}>
                    Aceptar
                </Text> 
            </TouchableOpacity>
        </View>
        );  
}

const styles = StyleSheet.create({
    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    bottomButtons: {
        marginHorizontal: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        width: '40%',
        height: '40%',
        justifyContent: 'center'
    },
    bottomButtonsText: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center'
    }
});

export default CancelAcceptComponent;