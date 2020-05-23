import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { getIcon } from '../icons';

const HeaderComponent = (props) => {

  const { logout } = React.useContext(AuthContext);
  const title = props.title || "Gastapp"

  return (
    <View style={styles.header}>
        <Text style={styles.text}> {title} </Text>
        <TouchableHighlight style={styles.icon} onPress={logout}>{getIcon('logout', 50)}</TouchableHighlight>
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
      marginLeft: '13%',
      flex: 1
  },
  icon: {
    elevation: 25,
    marginRight: 5
  }
});

export default HeaderComponent;