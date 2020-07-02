import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

const TypePickerComponent = (props) => {
    const user = props.user;
    const options = ["gastos", "ingresos"];
    const [selected, setSelected] = useState("gastos");

    useEffect(() => {
        props.onChange(selected);
    }, [selected]);

    return (
        <View style={styles.view}>
            <Picker
                style={styles.picker}
                selectedValue={selected}
                onValueChange={(value) => setSelected(value)}
            >
                {options.map(
                    (item, key) => (<Picker.Item label={item} value={item} key={key} />)
                )}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2,
        justifyContent: 'center',
    },
    picker: {
        marginLeft: '5%',
        width: '40%',
    },
})

export default TypePickerComponent;