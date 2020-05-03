import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { getIcon } from '../icons'

const ItemList = (props) => {

    return (
        <TouchableOpacity>
                <View>
                    <ListItem
                        leftIcon={props.icon ? getIcon(props.item.category) : undefined}
                        title={props.item.date}
                        titleStyle={props.titleStyle || styles.title}
                        subtitle={props.item.category}
                        subtitleStyle={props.subtitleStyle || styles.subtitle}
                        rightTitle={`$${props.item.amount}`}
                        bottomDivider
                        containerStyle = {undefined || props.containerStyle}
                    />
                </View>
            </TouchableOpacity>
        );  
}

const styles = StyleSheet.create({
  title: {
      fontSize: 12,
      color: 'black'
  },
  subtitle: {
      fontSize: 16,
      color: 'black'
  }
});

export default ItemList;