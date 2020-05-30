import React, { Component } from 'react';
import { getExpenseCategories, addExpense } from '../gastappService';
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
            date: new Date(Date.now()),
            description: "",
        }
    }


    loadCategories() {
        getExpenseCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
      }

    componentDidMount(){
        this.loadCategories();
    }

    changeDate(event) {
        if(event.type == "set") {
            this.setState({date: new Date(event.nativeEvent.timestamp)})
        }
    }

    chageAmount(amount) {
        this.setState({amount: amount})
    }

    chageDescription(description) {
        this.setState({description: description})
    }

    changeCategory(category) {
        this.setState({category: category});
    }

    buildExpense() {
        const expense = {
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "date": this.state.date.toISOString()
        }

        return expense;
    }

    submitExpense() {
        expense = this.buildExpense();
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
                onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                onAccept={this.submitExpense.bind(this)} onCancel={this.cancelExpense.bind(this)}
            />
        );
    }
}

export default AddExpenseScreen;