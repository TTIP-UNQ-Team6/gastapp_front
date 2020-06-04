import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import TextWithIconComponent from './TextWithIconComponent';
import CancelAcceptComponent from './CancelAcceptComponent';
import DatePickerComponent from './DatePickerComponent';
import ListPickerComponent from './ListPickerComponent';

const ExpenseComponent = (props) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>

            <TextWithIconComponent iconName="exp-amount" iconSize={50} keyboardType='numeric' placeholder="Monto" initialValue={props.initialAmount + ""} onChange={props.onAmountChange} />

            <ListPickerComponent iconName="exp-category" onChange={props.onCategoryChange} categories={props.categories} category={() => props.category} />

            <TextWithIconComponent iconName="exp-description" iconSize={50} keyboardType='default' placeholder="Descripcion" initialValue={props.initialDescription + ""} onChange={props.onDescriptionChange} />

            <ListPickerComponent iconName='exp-acc' onChange={props.onAccountChange} categories={props.accounts} category={() => props.account} />

            <DatePickerComponent onChange={props.onDateChange} initialDate={props.initialDate} />

            <CancelAcceptComponent onAccept={props.onAccept} onCancel={props.onCancel} />

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        elevation: 1,
        margin: 10,
        borderRadius: 10,
        flex: 1
    }
})

export default ExpenseComponent;