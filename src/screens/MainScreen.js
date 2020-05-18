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
        }
    }

    loadLastestExpenses() {
        getLastestExpenses(this.state.id_user).then(res => this.setState({lastestExpenses: res}))
    }

    componentDidMount(){
        this.loadLastestExpenses();
    }

    updateScreen() {
        this.loadLastestExpenses();
    }

    render() {

        console.log("EMAIL: ", this.state.user.email)

        return (
            <View style={styles.view}>
                <HeaderComponent/>
                <ScrollView> 
                    <BalanceComponent incomeAmount={4000} expenseAmount={2000}/>
                    <ShortListComponent title="Ultimos gastos" navigation={this.state.navigation} items={this.state.lastestExpenses} user_email={this.state.user.email}/>
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