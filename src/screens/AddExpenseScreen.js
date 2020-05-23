import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { getExpenseCategories, addExpense } from '../gastappService';
import TextWithIconComponent from '../components/TextWithIconComponent';
import CancelAcceptComponent from '../components/CancelAcceptComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import CategoryPickerComponent from '../components/CategoryPickerComponent';

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

    submitExpense() {
        const expense = {
            "user_email": this.state.user_email,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "date": this.state.date.toISOString()
        }

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
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
                
                <TextWithIconComponent iconName="exp-amount" iconSize={50} keyboardType='numeric' placeholder="Monto" onChange={this.chageAmount.bind(this)} />

                <CategoryPickerComponent onChange={this.changeCategory.bind(this)} categories={this.state.categories} category={() => {return this.state.category}}/>

                <TextWithIconComponent iconName="exp-description" iconSize={50} keyboardType='default' placeholder="Descripcion" onChange={this.chageDescription.bind(this)} />

                <DatePickerComponent onChange={this.changeDate.bind(this)} initialDate={this.state.date}/>

                <CancelAcceptComponent onAccept={this.submitExpense.bind(this)} onCancel={this.cancelExpense.bind(this)} />

            </KeyboardAvoidingView>
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
    buttonDate: {
        flex: 8,
        backgroundColor: "#0000",
    },
    textButtonDate: {
        color: 'black',
        fontSize: 17,
        textAlignVertical: 'center',
        paddingVertical: 14
    },
})

export default AddExpenseScreen;