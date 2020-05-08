import React, { Component } from 'react';
import { View, StyleSheet, Picker, TextInput, KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native';
import { getIcon } from '../icons'
import { getCategories, addExpense } from '../gastappService';
import DateTimePicker from '@react-native-community/datetimepicker';

class AddExpenseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            id_user: props.route.params.id_user,
            categories: [],
            category: '',
            amount: 0,
            date: new Date(Date.now()),
            description: "",
            showDatePicker: false
        }
    }


    loadCategories() {
        getCategories().then(res => this.setState({categories: res})).catch(e => this.setState({categories: []}));
      }

    componentDidMount(){
        this.loadCategories();
    }

    changeDate(event) {
        this.setState({showDatePicker: false})
        if(event.type == "set") {
            this.setState({date: new Date(event.nativeEvent.timestamp)})
        }
    }

    submitExpense() {
        const expense = {
            "id_user": this.state.id_user,
            "amount": this.state.amount,
            "category": this.state.category,
            "description": this.state.description,
            "date": this.state.date.toDateString()
        }
        addExpense(expense)
        this.props.route.params.updateScreen()
        this.state.navigation.goBack();
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
                <View style={styles.inputBox}>
                    <View style={styles.iconView}>{getIcon("exp-amount", 50)}</View>
                    <TextInput placeholder="Monto" keyboardType='numeric' placeholderTextColor="#c4c6c8" style={styles.textInputs} onChangeText={(text) => this.setState({amount: text})}/>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.iconView}>{getIcon("exp-date", 50)}</View>
                    <View style={styles.pickerView}>
                        <Picker
                        selectedValue={this.state.category}
                        onValueChange={(category) => this.setState({category: category})}
                        >
                        {this.state.categories.map(
                            (item, key) => (<Picker.Item label={item} value={item} key={key} />)
                        )}
                        </Picker>
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.iconView}>{getIcon("exp-description", 50)}</View>
                    <TextInput placeholder="Descripcion" placeholderTextColor="#c4c6c8" style={styles.textInputs} onChangeText={(text) => this.setState({description: text})}/>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.iconView}>{getIcon("exp-date", 50)}</View>
                    <TouchableOpacity onPress={() => this.setState({showDatePicker: true})} style={styles.buttonDate}>
                        <Text style={styles.textButtonDate}>{this.state.date.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={this.state.date}
                        mode="date"
                        display="default"
                        onChange={(date) => this.changeDate(date)}
                    />}
                </View>

                <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.bottomButtons} onPress={() => this.state.navigation.goBack()}> 
                            <Text style={styles.bottomButtonsText}>
                                Cancelar
                            </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtons} onPress={() => this.submitExpense()}> 
                            <Text style={styles.bottomButtonsText}>
                                Aceptar
                            </Text> 
                        </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        elevation: 1,
        margin: 10,
        borderRadius: 10,
        flex: 1,
    },
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
    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    bottomButtons: {
        marginHorizontal: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        width: '40%',
        height: '30%'
    },
    bottomButtonsText: {
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
        padding: '8%'
    }
})

export default AddExpenseScreen;