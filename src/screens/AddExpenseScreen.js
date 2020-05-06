import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { getIcon } from '../icons'


class AddExpenseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            expense: {
                id_user: props.id_user,
                category: "",
            },
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput placeholder="Hola" placeholderTextColor={'#000'} style={styles.input} inlineImageLeft={getIcon("food")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {

    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginHorizontal: 20
    }
})

export default AddExpenseScreen;