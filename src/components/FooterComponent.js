import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getIcon } from '../icons';
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FooterComponent = (props) => {
  return (
    <View style={styles.footer}>
        <View style={styles.plusIcon}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AddExpenseScreen', {id_user: props.id_user, updateScreen: props.updateScreen})}>
                {getIcon("plus", 53)}
            </TouchableOpacity>
        </View>
    </View>
    );  
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'column',
        height: 55,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    plusIcon: {
        alignSelf: 'center',
    }
});

export default FooterComponent;