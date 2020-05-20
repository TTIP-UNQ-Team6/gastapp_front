import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BalanceComponent from '../components/BalanceComponent';
import ShortListComponent from '../components/ShortListComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { getLastestExpenses } from '../gastappService';


export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user.user,
            navigation: props.navigation,
            lastestExpenses: [],
            lastestIncomes: [],
        }
    }

    loadLastestExpenses() {
        getLastestExpenses(this.state.user.email).then(res => this.setState({lastestExpenses: res}))
    }

    loadLastestIncomes() {
        
    }

    componentDidMount(){
        this.loadLastestExpenses();
        this.loadLastestIncomes();
    }

    updateScreen() {
        this.loadLastestExpenses();
        this.loadLastestIncomes();
    }

    render() {
        return (
            <View style={styles.view}>
                <HeaderComponent/>
                <ScrollView> 
                    <BalanceComponent incomeAmount={4000} expenseAmount={2000}/>
                    <ShortListComponent title="Ultimos gastos" navigation={this.state.navigation} items={this.state.lastestExpenses} user_email={this.state.user.email}/>
                    <ShortListComponent title="Ultimos ingresos" navigation={this.state.navigation} items={this.state.lastestIncomes} user_email={this.state.user.email}/>
                </ScrollView>
                <FooterComponent navigation={this.state.navigation} user_email={this.state.user.email} updateScreen={this.updateScreen.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    }
})