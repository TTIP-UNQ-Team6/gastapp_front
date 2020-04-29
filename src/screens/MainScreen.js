import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BalanceComponent from '../components/BalanceComponent'
import ShortListComponent from '../components/ShortListComponent'
import Header from '../components/Header';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
        }
    }

    render() {
        return (
            <View style={styles.view}> 
                <Header/>
                <BalanceComponent/>
                <ShortListComponent title="Ultimos gastos" navigation={this.state.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 0,
    }
})