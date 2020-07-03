import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyComponent = (props) => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>No hay {props.type} para mostrar.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2
    },
    text: {
        padding: 30,
        fontSize: 16
    }
});

export default EmptyComponent;