import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BalanceComponent from '../components/BalanceComponent'
import Header from '../components/Header';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigator: props.navigator,
        }
    }

    render() {
        return (
            <View style={styles.view}> 
                <Header/>
                <BalanceComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 0,
    }
})