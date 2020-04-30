import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BalanceComponent from '../components/BalanceComponent';
import ShortListComponent from '../components/ShortListComponent';
import Header from '../components/Header';
import { getLastestExpenses } from '../gastappService';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_user: 2,
            navigation: props.navigation,
            lastestExpenses: [],
        }
    }

    componentDidMount(){
        getLastestExpenses("2").then(res => this.setState({lastestExpenses: res}))
    }

    render() {
        return (
            <View style={styles.view}> 
                <Header/>
                <BalanceComponent/>
                <ShortListComponent title="Ultimos gastos" navigation={this.state.navigation} items={this.state.lastestExpenses} id_user={this.state.id_user}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 0,
    }
})