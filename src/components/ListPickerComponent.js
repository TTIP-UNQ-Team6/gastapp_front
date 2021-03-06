import React from 'react';
import { View, StyleSheet, Picker} from 'react-native';
import { getIcon } from '../icons';

const ListPickerComponent = (props) => {
    return (
        <View style={styles.inputBox}>
            <View style={styles.iconView}>{getIcon(props.iconName, 50)}</View>
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={props.value()}
                    onValueChange={(value) => props.onChange(value)}
                >
                {props.list.map(
                    (item, key) => (<Picker.Item label={item} value={item} key={key} />)
                )}
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    iconView: {
        alignSelf: 'center',
        marginHorizontal: 5,
        flex: 2
    },
    pickerView: {
        backgroundColor: "white",
        flex: 8
    },
})

export default ListPickerComponent;