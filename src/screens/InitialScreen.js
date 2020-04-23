import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import ExpensesScreen from './ExpensesScreen'

export default class InitialScreen extends Component {

  componentDidMount(){
    //setTimeout( () => { return this.changeScreen }, 30000);
  }

  changeScreen() {
    return (
      <ExpensesScreen/>
    )
  }

  render() {
      return (
          <View style={styles.container}>
            <Text style={styles.title}>
              GASTAPP
            </Text>
            <Image
              style={styles.logo}
              source={require('../../resources/icon.jpg')}
            />
          </View>
      )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#52E0F6",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 45,
    alignSelf: 'center',
    letterSpacing: 1,
    color: '#000000',
    bottom: 380,
    textShadowColor: '#A9A9A9',
    textShadowRadius: 15,
  },
  logo: {
    width: 240,
    height: 240,
    top: 80,
  },
})