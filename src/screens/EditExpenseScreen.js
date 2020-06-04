import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { getExpenseCategories, editExpense, deleteExpense, getExpenseAccounts } from '../gastappService';
import ExpenseComponent from '../components/ExpenseComponent';
import DeleteIconComponent from '../components/DeleteIconComponent';
import { View } from 'native-base';

class EditExpenseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            onSubmit: props.route.params.onSubmit,
            user_email: props.route.params.item.user_email,
            categories: [],
            accounts: [],
            account: '',
            id: props.route.params.item._id.$oid,
            category: props.route.params.item.category,
            amount: props.route.params.item.amount,
            date: new Date(props.route.params.item.date.$date),
            description: props.route.params.item.description,
        }
    }

    loadCategories() {
        getExpenseCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
    }

    loadAccounts() {
        getExpenseAccounts().then(res => this.setState({accounts: res})).catch(e => this.setState({accounts: []}))
    }

    componentDidMount() {
          this.state.navigation.setOptions({
            headerRight: () => 
              <DeleteIconComponent onPress={this.deleteExpense.bind(this)}/>
          });

        this.loadAccounts();
        this.loadCategories();
    }

    deleteExpense() {
        const body = {"id": this.state.id}
        deleteExpense(body).then(res => this.goBack())
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

    changeAccount(account) {
        this.setState({account: account});
    }

    buildExpense() {
        const expense = {
            "id": this.state.id,
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "account": this.state.account,
            "date": this.state.date.toISOString()
        }

        return expense;
    }

    goBack() {
        this.state.onSubmit();
        this.state.navigation.goBack();
    }

    submitEditExpense() {
        const expense = this.buildExpense();
        editExpense(expense).then(res => {
            this.goBack();
        })
    }

    cancelExpense() {
        this.state.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.view}>
                <ExpenseComponent 
                    onAmountChange={this.chageAmount.bind(this)} initialAmount={this.state.amount}
                    onCategoryChange={this.changeCategory.bind(this)} categories={this.state.categories} category={this.state.category}
                    onDescriptionChange={this.chageDescription.bind(this)} initialDescription={this.state.description}
                    onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                    onAccountChange={this.changeAccount.bind(this)} accounts={this.state.accounts} account={this.state.account}
                    onAccept={this.submitEditExpense.bind(this)} onCancel={this.cancelExpense.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
})

export default EditExpenseScreen;