import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AmountBalanceComponent from './AmountBalanceComponent'

const BalanceComponent = (props) => {
    return (
        <View style={styles.view}>
                <AmountBalanceComponent icon='balance' iconSize={45} title='Balance' subtitle='$1001'/>
            <View style={styles.horizontalView}>
                <AmountBalanceComponent icon='up-arrow' iconSize={45} title='Ingresos' subtitle='$5001'/>
                <AmountBalanceComponent icon='down-arrow' iconSize={45} title='Gastos' subtitle='$4000'/>
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
        alignContent: 'center',
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