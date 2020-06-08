import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { getIncomeCategories, editIncome, deleteIncome, getIncomeAccounts, getExpenseTypes } from '../gastappService';
import IncomeComponent from '../components/IncomeComponent';
import DeleteIconComponent from '../components/DeleteIconComponent';
import { View } from 'native-base';

class EditIncomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            onSubmit: props.route.params.onSubmit,
            user_email: props.route.params.item.user_email,
            id: props.route.params.item._id.$oid,
            categories: [],
            category: props.route.params.item.category,
            accounts: [],
            types: [],
            account: props.route.params.item.account,
            amount: props.route.params.item.amount,
            type: props.route.params.item.itype,
            date: new Date(props.route.params.item.date.$date),
            description: props.route.params.item.description,
        }
    }


    loadCategories() {
        getIncomeCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
    }

    loadAccounts() {
        getIncomeAccounts().then(res => this.setState({accounts: res})).catch(e => this.setState({accounts: []}));
    }

    loadTypes() {
        getExpenseTypes().then(res => this.setState({types: res})).catch(e => this.setState({types: []}))
    }

    componentDidMount(){
        this.state.navigation.setOptions({
            headerRight: () => 
              <DeleteIconComponent onPress={this.deleteIncome.bind(this)}/>
          });

        this.loadAccounts();
        this.loadCategories();
        this.loadTypes();
    }

    deleteIncome() {
        const body = {"id": this.state.id}
        deleteIncome(body).then(res => this.goBack())
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

    buildIncome() {
        const income = {
            "id": this.state.id,
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "account": this.state.account,
            "type": this.state.type,
            "date": this.state.date.toISOString()
        }

        return income;
    }

    goBack() {
        this.state.onSubmit();
        this.state.navigation.goBack();
    }

    submitEditIncome() {
        const income = this.buildIncome();
        editIncome(income).then(res => {
            this.goBack();
        })
    }

    cancelIncome() {
        this.state.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.view}>
                <IncomeComponent 
                    onAmountChange={this.chageAmount.bind(this)} initialAmount={this.state.amount}
                    onCategoryChange={this.changeCategory.bind(this)} categories={this.state.categories} category={this.state.category}
                    onDescriptionChange={this.chageDescription.bind(this)} initialDescription={this.state.description}
                    onAccountChange={this.changeAccount.bind(this)} accounts={this.state.accounts} account={this.state.account}     
                    onTypeChange={this.changeType.bind(this)} types={this.state.types} type={this.state.type}
                    onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                    onAccept={this.submitEditIncome.bind(this)} onCancel={this.cancelIncome.bind(this)}
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

export default EditIncomeScreen;