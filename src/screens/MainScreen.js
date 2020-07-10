import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BalanceComponent from '../components/BalanceComponent';
import ShortListComponent from '../components/ShortListComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import MonthYearPickerComponent from '../components/MonthYearPickerComponent';
import { getAllExpenses, getAllIncomes, getTotalExpensesAmount, getTotalIncomesAmount, getExpenseAccounts, getExpenseCategories, getIncomeAccounts, getIncomeCategories, filterExpenses, filterIncomes, getExpenseTypes, getIncomeTypes } from '../gastappService';


export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user.user,
            navigation: props.navigation,
            expenses: [],
            incomes: [],
            incomeAmount: 0,
            expenseAmount: 0
        }
    }

    loadAll(date) {
        const month = date ? date.getMonth() : new Date().getMonth();
        const year = date ? date.getFullYear() : new Date().getFullYear();

        const body = {
            "user_email": this.state.user.email,
            "filter": {
              "type": "unico",
              "date": {
                  "from": new Date(year, month, 1),
                  "to": new Date(year, month + 1, 1)
              }
            }
          }

        filterExpenses(body).then(res => this.setState({expenses: res.data}))
        filterIncomes(body).then(res => this.setState({incomes: res.data}))
    }

    componentDidMount() {
        this.loadAll();
    }

    render() {
        return (
            <View style={styles.view}>
                <HeaderComponent navigation={this.state.navigation} user={this.state.user} />
                <ScrollView>
                    <MonthYearPickerComponent onChangeDate={this.loadAll.bind(this)} />
                    <BalanceComponent expenseAmount={this.state.expenses.reduce((parcial, i) => parcial + i.amount, 0)} incomeAmount={this.state.incomes.reduce((parcial, i) => parcial + i.amount, 0)} />
                    <ShortListComponent title="Ultimos gastos" update={this.loadAll.bind(this)} navigation={this.state.navigation} editScreen={"EditExpenseScreen"} items={this.state.expenses} viewAllScreen={"ExpensesScreen"} getAll={getAllExpenses} getTotal={getTotalExpensesAmount} getAccounts={getExpenseAccounts} getCategories={getExpenseCategories} filter={filterExpenses} user_email={this.state.user.email} getTypes={getExpenseTypes} />
                    <ShortListComponent title="Ultimos ingresos" update={this.loadAll.bind(this)} navigation={this.state.navigation} editScreen={"EditIncomeScreen"} items={this.state.incomes} viewAllScreen={"IncomesScreen"} getAll={getAllIncomes} getTotal={getTotalIncomesAmount} getAccounts={getIncomeAccounts} getCategories={getIncomeCategories} filter={filterIncomes} user_email={this.state.user.email} getTypes={getIncomeTypes} />
                </ScrollView>
                <FooterComponent navigation={this.state.navigation} user_email={this.state.user.email} updateScreen={this.loadAll.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
})