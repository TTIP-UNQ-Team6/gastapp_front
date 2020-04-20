import React, { Component, useState } from 'react';
import { StyleSheet, FlatList, View, Text, Picker } from 'react-native';
import Header from '../components/Header';
import ListExpense from '../components/ListExpense';
import { getAllExpenses } from '../apiConnection';

class Expenses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      category: 'all',
      categories: ['all', 'clothes', 'food']
    }
  }

  loadExpenses = async () => {
    const body = {
      id_user: '2',
    }
    getAllExpenses(body).then(res => this.setState({expenses: res})).then(res => console.log(this.state.expenses))
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
          <Text style={styles.titlePicker}>
            Select a category
          </Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.category}
              onValueChange={(category) => this.setState({category: category})}
            >
              {this.state.categories.map(
                (item, key) => (<Picker.Item label={item} value={item} key={key} />)
              )}
            </Picker>
          </View>
          <FlatList 
            contentContainerStyle = {{borderBottomWidth: 0, borderTopWidth: 0}}
            data={this.state.expenses} 
            contentContainerStyle={{ paddingBottom: 20}} 
            renderItem={({item}) => <ListExpense item={item}></ListExpense>}
            keyExtractor={(item) => item._id.$oid}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  picker: {
      marginLeft:5,
      marginRight:5,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
  },
  titlePicker: {
    marginLeft:10,
  }
});

export default Expenses;