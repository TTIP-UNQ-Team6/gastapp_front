import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AmountBalanceComponent from './AmountBalanceComponent'

const ShortListComponent = (props) => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <Text style={styles.title}> {props.title} </Text>
                <View>
                    <Text> Gasto 1 </Text>
                    <Text> Gasto 1 </Text>
                    <Text> Gasto 1 </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => props.navigation.navigate('ExpensesScreen')} >
                        Ver todos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 1
    },
    container: {
        margin: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
    },
    button: {
        backgroundColor: "#DDDDDD",
        width: 120,
        paddingVertical: 5,
        borderRadius: 15,
        margin: 0
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15
    }
});

export default ShortListComponent;