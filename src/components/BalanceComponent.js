import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AmountBalanceComponent from './AmountBalanceComponent'

const BalanceComponent = (props) => {
    const balance = props.incomeAmount - props.expenseAmount;
    const color = balance >= 0 ? '#008000' : '#DC0000'
    return (
        <View style={styles.view}>
                <AmountBalanceComponent icon='balance' iconColor={color} iconSize={45} title='Balance' subtitle={`$${balance}`}/>
            <View style={styles.horizontalView}>
                <AmountBalanceComponent icon='up-arrow' iconSize={45} title='Ingresos' subtitle={`$${props.incomeAmount}`}/>
                <AmountBalanceComponent icon='down-arrow' iconSize={45} title='Gastos' subtitle={`$${props.expenseAmount}`}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        height: 180,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2
    },
    horizontalView: {
        flexDirection: 'row'
    }
});

export default BalanceComponent;