import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HiddenButtonsComponent = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { props.onAddExpense() }}>
                <Text style={styles.text}>
                    Nuevo gasto
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { props.onAddIncome() }}>
                <Text style={styles.text}>
                    Nuevo ingreso
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5,
    },
    button: {
        marginHorizontal: 20,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        width: 120,
        height: 30,
        alignSelf: 'center',
        elevation: 5
    },
    text: {
        color: 'white',
        textAlign: 'center',
        padding: 4
    },
});

export default HiddenButtonsComponent;