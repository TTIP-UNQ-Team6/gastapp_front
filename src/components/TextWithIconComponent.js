import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { getIcon } from '../icons'

const TextWithIconComponent = (props) => {
    return (
        <View style={styles.inputBox}>
            <View style={styles.iconView}>{getIcon(props.iconName, props.iconSize)}</View>
            <TextInput placeholder="Monto" keyboardType={props.keyboardType} placeholderTextColor="#c4c6c8" style={styles.textInputs} onChangeText={(text) => props.onChange(text)}/>
        </View>
        );  
}

const styles = StyleSheet.create({
    textInputs: {
        height: 65,
        backgroundColor: 'white',
        borderRadius: 4,
        color: 'black',
        fontSize: 17,
        flex: 8,
    },
    iconView: {
        alignSelf: 'center',
        marginHorizontal: 5,
        flex: 2,
    },
    inputBox: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 20,
        borderColor: '#c4c6c8',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
});

export default TextWithIconComponent;