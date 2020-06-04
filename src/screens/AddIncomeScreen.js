import React, { Component } from 'react';
import { getIncomeCategories, addIncome, getIncomeAccounts } from '../gastappService';
import IncomeComponent from '../components/IncomeComponent';

class AddIncomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            user_email: props.route.params.user_email,
            categories: [],
            category: '',
            accounts: [],
            account: '',
            amount: 0,
            date: new Date(Date.now()),
            description: "",
        }
    }


    loadCategories() {
        getIncomeCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
    }

    loadAccounts() {
        getIncomeAccounts().then(res => this.setState({accounts: res})).catch(e => this.setState({accounts: []}));
    }

    componentDidMount(){
        this.loadCategories();
        this.loadAccounts();
    }

    changeDate(event) {
        if(event.type == "set") {
            this.setState({date: new Date(event.nativeEvent.timestamp)});
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

    submitIncome() {
        const income = {
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "account": this.state.account,
            "date": this.state.date.toISOString()
        }

        addIncome(income).then(res => {
            this.props.route.params.updateScreen()
            this.state.navigation.goBack();
        })
    }

    cancelIncome() {
        this.state.navigation.goBack();
    }

    render() {
        return (
            <IncomeComponent 
                onAmountChange={this.chageAmount.bind(this)} initialAmount={this.state.amount}
                onCategoryChange={this.changeCategory.bind(this)} categories={this.state.categories} category={this.state.category}
                onDescriptionChange={this.chageDescription.bind(this)} initialDescription={this.state.description}
                onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                onAccountChange={this.changeAccount.bind(this)} accounts={this.state.accounts} account={this.state.account}
                onAccept={this.submitIncome.bind(this)} onCancel={this.cancelIncome.bind(this)}
            />
        );
    }
}

export default AddIncomeScreen;