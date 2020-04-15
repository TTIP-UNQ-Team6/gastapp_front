import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}> {props.title} </Text>
    </View>
    );  
}

const styles = StyleSheet.create({
  header: {
      height: 90,
      padding: 20,
      backgroundColor: '#52E0F6',
  },
  text: {
      color: '#fff', 
      fontSize: 35,
      textAlign: 'center',
  },
});

export default Header;