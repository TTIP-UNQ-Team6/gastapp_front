import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const CancelAcceptComponent = (props) => {
    return (
        <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.bottomButtons} onPress={() => props.cancelExpense()}> 
                <Text style={styles.bottomButtonsText}>
                    Cancelar
                </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButtons} onPress={() => props.submitExpense()}> 
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
        height: '30%'
    },
    bottomButtonsText: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        padding: '8%'
    }
});

export default CancelAcceptComponent;