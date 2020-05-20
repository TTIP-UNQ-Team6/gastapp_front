import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getIcon } from '../icons';

const DatePickerComponent = (props) => {
    const [show, setShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date(Date.now));
    return (
        <View style={styles.inputBox}>
            <View style={styles.iconView}>{getIcon("exp-date", 50)}</View>

            <TouchableOpacity onPress={() => setShow(true)} style={styles.buttonDate}>
                <Text style={styles.textButtonDate}>{props.initialDate.toLocaleDateString()}</Text>
            </TouchableOpacity>

            {show && <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={props.initialDate}
                mode="date"
                display="default"
                onChange={(date) => { setShow(false); props.onChange(date) }}
            />}
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
    buttonDate: {
        flex: 8,
        backgroundColor: "#0000",
    },
    textButtonDate: {
        color: 'black',
        fontSize: 17,
        textAlignVertical: 'center',
        paddingVertical: 14
    },
    iconView: {
        alignSelf: 'center',
        marginHorizontal: 5,
        flex: 2
    },
})

export default DatePickerComponent;