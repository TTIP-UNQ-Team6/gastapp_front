import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { getIncomeCategories, editIncome } from '../gastappService';
import IncomeComponent from '../components/IncomeComponent';
import { View } from 'native-base';

class EditIncomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            onSubmit: props.route.params.onSubmit,
            user_email: props.route.params.item.user_email,
            categories: [],
            id: props.route.params.item._id.$oid,
            category: props.route.params.item.category,
            amount: props.route.params.item.amount,
            date: new Date(props.route.params.item.date.$date),
            description: props.route.params.item.description,
        }
    }


    loadCategories() {
        getIncomeCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
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

    buildIncome() {
        const income = {
            "id": this.state.id,
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "date": this.state.date.toISOString()
        }

        return income;
    }

    submitEditIncome() {
        const income = this.buildIncome();
        editIncome(income).then(res => {
            this.state.onSubmit();
        })
        .then(this.state.navigation.goBack());
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