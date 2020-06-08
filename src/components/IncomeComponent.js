import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import TextWithIconComponent from './TextWithIconComponent';
import CancelAcceptComponent from './CancelAcceptComponent';
import DatePickerComponent from './DatePickerComponent';
import ListPickerComponent from './ListPickerComponent';

const IncomeComponent = (props) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.view}>
            
        <ScrollView style={styles.inisideView}>


            <TextWithIconComponent iconName="exp-amount" iconSize={50} keyboardType='numeric' placeholder="Monto" initialValue={props.initialAmount + ""} onChange={props.onAmountChange} />

            <ListPickerComponent iconName="exp-category" onChange={props.onCategoryChange} list={props.categories} value={() => props.category} />

            <TextWithIconComponent iconName="exp-description" iconSize={50} keyboardType='default' placeholder="Descripcion" initialValue={props.initialDescription + ""} onChange={props.onDescriptionChange} />

            <ListPickerComponent iconName='exp-acc' onChange={props.onAccountChange} list={props.accounts} value={() => props.account} />

            <ListPickerComponent iconName='exp-acc' onChange={props.onTypeChange} list={props.types} value={() => props.type} />

            {props.type === "unico" ? <DatePickerComponent onChange={props.onDateChange} initialDate={props.initialDate} /> : <View/>}

            </ScrollView >

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
        flex: 1,
        flexGrow: 1
    },
    inisideView: {
        height: '50%'
    },
})


export default IncomeComponent;