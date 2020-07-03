import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { getExpenseCategories, editExpense, deleteExpense, getExpenseAccounts, getExpenseTypes } from '../gastappService';
import ExpenseComponent from '../components/ExpenseComponent';
import DeleteIconComponent from '../components/DeleteIconComponent';
import { validateAmount } from '../utils/Validates';

class EditExpenseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            onSubmit: props.route.params.onSubmit,
            user_email: props.route.params.item.user_email,
            categories: [],
            accounts: [],
            types: [],
            id: props.route.params.item._id.$oid,
            category: props.route.params.item.category,
            amount: props.route.params.item.amount,
            account: props.route.params.item.account,
            type: props.route.params.item.etype,
            date: new Date(props.route.params.item.date.$date),
            description: props.route.params.item.description,
            error: "",
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

    componentDidMount() {
          this.state.navigation.setOptions({
            headerRight: () => 
              <DeleteIconComponent onPress={this.deleteExpense.bind(this)}/>
          });

        this.loadAccounts();
        this.loadCategories();
        this.loadTypes();
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

    changeType(type) {
        this.setState({type: type})
    }

    changeError(error) {
        this.setState({error: error});
    }

    buildExpense() {
        const expense = {
            "id": this.state.id,
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

    goBack() {
        this.state.onSubmit();
        this.state.navigation.goBack();
    }

    submitEditExpense() {
        const expense = this.buildExpense();
        if(validateAmount(expense.amount, this.changeError.bind(this))) {
            editExpense(expense).then(res => {
                this.goBack();
            })
        }
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
                    onAccountChange={this.changeAccount.bind(this)} accounts={this.state.accounts} account={this.state.account}
                    onTypeChange={this.changeType.bind(this)} types={this.state.types} type={this.state.type}
                    onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                    onAccept={this.submitEditExpense.bind(this)} onCancel={this.cancelExpense.bind(this)}
                    error={this.state.error}
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