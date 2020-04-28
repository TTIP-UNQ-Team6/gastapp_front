import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import ExpensesScreen from './ExpensesScreen'

export default class LoadingScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation
    }
  }

  componentDidMount(){
    //setTimeout( () => { this.state.navigation.navigate('ExpensesScreen') }, 300);
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
    alignItems: 'center',
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
    bottom: 420,
    textShadowColor: '#A9A9A9',
    textShadowRadius: 15,
  },
  logo: {
    width: 240,
    height: 240,
    marginTop: 100
  },
})