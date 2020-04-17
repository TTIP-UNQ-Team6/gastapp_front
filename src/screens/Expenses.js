import React, { Component, useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Header from '../components/Header';
import ListExpense from '../components/ListExpense';
import { getAllExpenses } from '../apiConnection';

class Expenses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    }
  }

  loadExpenses = async () => {
    const body = {
      id_user: '2',
    }
    getAllExpenses(body).then(res => this.setState({expenses: res}))
  }

  componentDidMount() {
    this.loadExpenses();
  }

  data = () => {
    return [
      {id: 1, amount: 100},
      {id: 2, amount: 200},
      {id: 3, amount: 300},
    ]
  }

  render() {
      return (
        <View>
          <Header title="Gastapp"/>
          {console.log("Estado ", this.state)}
          <FlatList data={this.state.expenses} renderItem={({item}) => <ListExpense item={item}></ListExpense>}/>
        </View>
      )
  }
}

export default Expenses;