import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListExpense = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
        <View style={styles.view}>
            <Text style={styles.itemText}> {props.item.category} </Text>
            <Text style={styles.itemText}> {props.item.amount} </Text>
        </View>
    </TouchableOpacity>
    );  
}

const styles = StyleSheet.create({
  item: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
  },
  view: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  itemText: {
      fontSize: 18,
  },
});

export default ListExpense;