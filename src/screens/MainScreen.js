import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BalanceComponent from '../components/BalanceComponent';
import ShortListComponent from '../components/ShortListComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { getLastestExpenses, getLastestIncomes, getAllExpenses, getAllIncomes, getTotalExpensesAmount, getTotalIncomesAmount, getExpenseAccounts, getExpenseCategories, getIncomeAccounts, getIncomeCategories, filterExpenses, filterIncomes } from '../gastappService';


export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user.user,
            navigation: props.navigation,
            lastestExpenses: [],
            lastestIncomes: [],
            incomeAmount: 0,
            expenseAmount: 0
        }
    }

    loadLastestExpenses() {
        getLastestExpenses(this.state.user.email).then(res => this.setState({lastestExpenses: res}));
    }

    loadLastestIncomes() {
        getLastestIncomes(this.state.user.email).then(res => this.setState({lastestIncomes: res}));
    }

    loadAmounts() {
        getTotalExpensesAmount(this.state.user.email).then(res => this.setState({expenseAmount: res.total}))
        getTotalIncomesAmount(this.state.user.email).then(res => this.setState({incomeAmount: res.total}))
    }

    componentDidMount(){
        this.updateScreen();
    }

    updateScreen() {
        this.loadAmounts();
        this.loadLastestExpenses();
        this.loadLastestIncomes();
    }

    render() {
        return (
            <View style={styles.view}>
                <HeaderComponent navigation={this.state.navigation} user={this.state.user}/>
                <ScrollView> 
                    <BalanceComponent incomeAmount={this.state.incomeAmount} expenseAmount={this.state.expenseAmount}/>
                    <ShortListComponent title="Ultimos gastos" update={this.updateScreen.bind(this)} navigation={this.state.navigation} editScreen={"EditExpenseScreen"} items={this.state.lastestExpenses} viewAllScreen={"ExpensesScreen"} getAll={getAllExpenses} getTotal={getTotalExpensesAmount} getAccounts={getExpenseAccounts} getCategories={getExpenseCategories} filter={filterExpenses} user_email={this.state.user.email}/>
                    <ShortListComponent title="Ultimos ingresos" update={this.updateScreen.bind(this)} navigation={this.state.navigation} editScreen={"EditIncomeScreen"} items={this.state.lastestIncomes} viewAllScreen={"IncomesScreen"} getAll={getAllIncomes} getTotal={getTotalIncomesAmount} getAccounts={getIncomeAccounts} getCategories={getIncomeCategories} filter={filterIncomes} user_email={this.state.user.email}/>
                </ScrollView>
                <FooterComponent navigation={this.state.navigation} user_email={this.state.user.email} updateScreen={this.updateScreen.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
})