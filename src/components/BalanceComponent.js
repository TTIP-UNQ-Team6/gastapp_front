import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BalanceComponent = (props) => {
    return (
        <View style={styles.view}>
            <Text>Hola mundo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        height: 150,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EBEBEB'
    }
});

export default BalanceComponent;