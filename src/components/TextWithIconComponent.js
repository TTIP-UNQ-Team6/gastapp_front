import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { getIcon } from '../icons'

const TextWithIconComponent = (props) => {

    console.log("Altura: ", props);

    return (
        <View style={styles(props).inputBox}>
            <View style={styles(props).iconView}>{getIcon(props.iconName, props.iconSize, props.iconColor)}</View>
            <TextInput placeholder={props.placeholder} keyboardType={props.keyboardType} placeholderTextColor="#c4c6c8" style={styles(props).textInputs} onChangeText={(text) => props.onChange(text)}/>
        </View>
        );  
}

const styles = (props) => StyleSheet.create({
    textInputs: {
        height: '100%',
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
        height: props.height || '11.5%',
        backgroundColor: props.backgroundColor || 'white',
        borderRadius: 8,
        marginTop: 20,
        borderColor: '#c4c6c8',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
});

export default TextWithIconComponent;