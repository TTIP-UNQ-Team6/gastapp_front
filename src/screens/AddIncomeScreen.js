import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { getIncomeCategories, addIncome } from '../gastappService';
import IncomeComponent from '../components/IncomeComponent';

class AddIncomeScreen extends Component {

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
        getIncomeCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
      }

    componentDidMount(){
        this.loadCategories();
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

    submitIncome() {
        const income = {
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
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
                onAmountChange={this.chageAmount.bind(this)}
                onCategoryChange={this.changeCategory.bind(this)} categories={this.state.categories} category={this.state.category}
                onDescriptionChange={this.chageDescription.bind(this)}
                onDateChange={this.changeDate.bind(this)} initialDate={this.state.date}
                onAccept={this.submitIncome.bind(this)} onCancel={this.cancelIncome.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 20,
        borderColor: '#c4c6c8',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    view: {
        backgroundColor: '#fff',
        elevation: 1,
        margin: 10,
        borderRadius: 10,
        flex: 1,
    },
    textInputs: {
        height: 65,
        backgroundColor: 'white',
        borderRadius: 4,
        color: 'black',
        fontSize: 17,
        flex: 8
    },
    iconView: {
        alignSelf: 'center',
        marginHorizontal: 5,
        flex: 2
    },
    pickerView: {
        backgroundColor: "white",
        flex: 8
    },

})

export default AddIncomeScreen;