import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import icons from '../icons'


const ItemExpense = (props) => {
  return (
      <TouchableOpacity>
            <View>
                <ListItem
                    leftIcon={icons[props.item.category]}
                    title={props.item.category}
                    titleStyle={styles.title}
                    subtitle={props.item.date}
                    subtitleStyle={props.item.subtitle}
                    rightTitle={`$${props.item.amount}`}
                    bottomDivider
                />
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
  title: {
      fontSize: 15,
      color: 'black'
  },
  subtitle: {
      fontSize: 20,
      color: 'black'
  }
});

export default ItemExpense;