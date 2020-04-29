import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AmountBalanceComponent from './AmountBalanceComponent'

const BalanceComponent = (props) => {
    return (
        <View style={styles.view}>
            <AmountBalanceComponent text='Balance'/>
            <View style={styles.horizontalView}>
                <AmountBalanceComponent text='Ingresos'/>
                <AmountBalanceComponent text='Gastos'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 1
    },
    horizontalView: {
        flexDirection: 'row'
    }
});

export default BalanceComponent;