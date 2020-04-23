import React, { Component, useState } from 'react';
import { StyleSheet, FlatList, View, Text, Picker } from 'react-native';
import Header from '../components/Header';
import ItemExpense from '../components/ItemExpense';
import { getAllExpenses, getCategories, getExpensesByCategory } from '../gastappService';

class ExpensesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id_user: 2,
      expenses: [],
      category: 'all',
      categories: ["all"]
    }
  }

  loadExpenses() {
    if (this.state.category == "all") {
      getAllExpenses(this.state.id_user).then(res => this.setState({expenses: res}))
    }
    else {
      getExpensesByCategory(this.state.id_user, this.state.category).then(res => this.setState({expenses: res}))
    }
  }

  loadCategories() {
    getCategories().then(res => this.setState({categories: this.state.categories.concat(res)}))
  }

  componentDidMount() {
    this.loadExpenses();
    this.loadCategories();
  }

  render = () => {
      return (
        <View style={styles.view}>
          <Header title="Gastapp"/>
          <Text style={styles.titlePicker}>
            Select a category
          </Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.category}
              onValueChange={(category) => this.setState({category: category}, this.loadExpenses)}
            >
              {this.state.categories.map(
                (item, key) => (<Picker.Item label={item} value={item} key={key} />)
              )}
            </Picker>
          </View>
          <FlatList 
            style={styles.list}
            data={this.state.expenses} 
            renderItem={({item}) => <ItemExpense item={item}></ItemExpense>}
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
  },
  view: {
    flex: 1,
  },
  list: {
    paddingBottom: 20,
  }
});

export default ExpensesScreen;