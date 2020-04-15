import React, { Component, useState } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import Header from '../components/Header'
import ListExpense from '../components/ListExpense'

const items = [
  {id: 1, precio: '50'},
  {id: 2, precio: '120'},
  {id: 3, precio: '80'},
]

class Expenses extends Component {
  render() {
      return (
        <View>
          <Header title="Gastapp"/>
          <FlatList data={items} renderItem={({item}) => <ListExpense item={item}/> } />
        </View>
      )
  }
}

export default Expenses;