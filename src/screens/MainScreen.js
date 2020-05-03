import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import BalanceComponent from '../components/BalanceComponent';
import ShortListComponent from '../components/ShortListComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
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
                <HeaderComponent/>
                <ScrollView> 
                    <BalanceComponent incomeAmount={4000} expenseAmount={2000}/>
                    <ShortListComponent title="Ultimos gastos" navigation={this.state.navigation} items={this.state.lastestExpenses} id_user={this.state.id_user}/>
                </ScrollView>
                <FooterComponent navigation={this.state.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    }
})