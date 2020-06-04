import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { getIcon } from '../icons';

const HeaderComponent = (props) => {

  const navigation = props.navigation;
  const title = props.title || "Gastapp"

  return (
    <View style={styles.header}>
        <Text style={styles.text}> {title} </Text>
        <TouchableHighlight style={styles.icon} onPress={() => navigation.navigate('UserScreen', {user: props.user})} >{getIcon('account', 50, '#666e')}</TouchableHighlight>
    </View>
    );  
}

const styles = StyleSheet.create({
  header: {
      height: 60,
      marginTop: 25,
      backgroundColor: '#52E0F6',
      elevation: 2,
      alignItems: 'center',
      flexDirection: 'row'
  },
  text: {
      color: '#fff', 
      fontSize: 35,
      textAlign: 'center',
      marginLeft: '15%',
      flex: 1
  },
  icon: {
    elevation: 25,
    marginRight: 10
  }
});

export default HeaderComponent;