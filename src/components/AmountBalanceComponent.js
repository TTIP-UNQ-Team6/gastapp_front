import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getIcon } from '../icons'

const AmountBalanceComponent = (props) => {
    return (
        <View style={styles.view}>
            <View style={styles.iconView}>
                <View style={styles.icon}>
                    {getIcon(props.icon, props.iconSize)}
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        margin: 5,
        width: 150,
        height: 85,
        flexDirection: 'row',
    },
    iconView: {
        flex: 1,
        alignItems:"center",
        justifyContent: 'center'
    },
    icon: {
        
    },
    textView: {
        flexDirection: 'column',
        flex: 2,
        marginTop: 10
    },
    title: {
        fontSize: 15,
    },
    subTitle: {
        fontSize: 25,
    },
});

export default AmountBalanceComponent;