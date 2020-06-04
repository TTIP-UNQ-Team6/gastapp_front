import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getIcon } from '../icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HiddenButtonsComponent from './HiddenButtonsComponent';

const FooterComponent = (props) => {
    const [show, setShow] = React.useState(false);
    return (
        <View>
            {show &&
                <HiddenButtonsComponent 
                    onAddExpense={() => { props.navigation.navigate('AddExpenseScreen', {user_email: props.user_email, updateScreen: props.updateScreen}) }} 
                    onAddIncome={() => { props.navigation.navigate('AddIncomeScreen', {user_email: props.user_email, updateScreen: props.updateScreen}) }} 
                />
            }
            <View style={styles.footer}>
                <View style={styles.plusIcon}>
                    <TouchableOpacity onPress={() => { setShow(!show) }}>
                        {getIcon("plus", 50)}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    footer: {
        flexDirection: 'column',
        height: 42,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 50,
        justifyContent: 'center'
    },
    plusIcon: {
        alignSelf: 'center',
    },
});

export default FooterComponent;