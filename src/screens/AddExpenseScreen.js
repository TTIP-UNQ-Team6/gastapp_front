import React, { Component } from 'react';
import { getExpenseCategories, addExpense, getExpenseAccounts, getExpenseTypes } from '../gastappService';
import ExpenseComponent from '../components/ExpenseComponent';

class AddExpenseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            user_email: props.route.params.user_email,
            categories: [],
            category: '',
            amount: 0,
            accounts: [],
            account: '',
            types: [],
            type: '',
            date: new Date(Date.now()),
            description: "",
        }
    }


    loadCategories() {
        getExpenseCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
    }

    loadAccounts() {
        getExpenseAccounts().then(res => this.setState({accounts: res})).catch(e => this.setState({accounts: []}))
    }

    loadTypes() {
        getExpenseTypes().then(res => this.setState({types: res})).catch(e => this.setState({types: []}))
    }

    componentDidMount(){
        this.loadCategories();
        this.loadAccounts();
        this.loadTypes();
    }

    changeDate(event) {
        if(event.type == "set") {
            this.setState({date: new Date(event.nativeEvent.timestamp)})
        }
    }

    chageAmount(amount) {
        this.setState({amount: amount});
    }

    chageDescription(description) {
        this.setState({description: description});
    }

    changeCategory(category) {
        this.setState({category: category});
    }

    changeAccount(account) {
        this.setState({account: account});
    }

    changeType(type) {
        this.setState({type: type})
    }

    buildExpense() {
        const expense = {
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "account": this.state.account,
            "type": this.state.type,
            "date": this.state.date.toISOString()
        }

        return expense;
    }

    submitExpense() {
        const expense = this.buildExpense();
        addExpense(expense).then(res => {
            this.props.route.params.updateScreen()
            this.state.navigation.goBack();
        })
    }

    cancelExpense() {
        this.state.navigation.goBack()
    }

    render() {
        return (
            <ExpenseComponent 
                onAmountChange={this.chageAmount.bind(this)} initialAmount={this.state.amount}
                onCategoryChange={this.changeCategory.bind(this)} categories={this.state.categories} category={this.state.category}
                onDescriptionChange={this.chageDescription.bind(this)} initialDescription={this.state.description}
                onAccountChange={this.changeAccount.bind(this)} accounts={this.state.accounts} account={this.state.account}
                onTypeChange={this.changeType.bind(this)} types={this.state.types} type={this.state.type}
                onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                onAccept={this.submitExpense.bind(this)} onCancel={this.cancelExpense.bind(this)}
            />
        );
    }
}

export default AddExpenseScreen;