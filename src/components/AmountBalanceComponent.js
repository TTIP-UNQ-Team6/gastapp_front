import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AmountBalanceComponent = (props) => {
    return (
        <View style={styles.view}>
            <Text>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 7,
        width: 150,
        height: 85,
    }
});

export default AmountBalanceComponent;