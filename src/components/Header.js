import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {

  const title = props.title || "Gastapp"

  return (
    <View style={styles.header}>
        <Text style={styles.text}> {title} </Text>
    </View>
    );  
}

const styles = StyleSheet.create({
  header: {
      height: 60,
      marginTop: 25,
      backgroundColor: '#52E0F6',
      elevation: 2,
  },
  text: {
      color: '#fff', 
      fontSize: 35,
      textAlign: 'center',
  },
});

export default Header;