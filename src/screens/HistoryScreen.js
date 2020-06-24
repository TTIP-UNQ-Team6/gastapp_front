import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import ItemList from '../components/ItemList';
import FilterComponent from '../components/FilterComponent';

class HistoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_email: props.route.params.user_email,
      showFilter: false,
      all: [],
      totalAmount: 0,
      categories: [],
      accounts: [],
      types: []
    }
  }

  loadTotalAmount() {
    const total = this.state.all.reduce((parcial, i) => parcial + i.amount, 0);
    this.setState({totalAmount: total});
  }

  loadCategories() {
    this.props.route.params.getCategories()
      .then(res => this.setState({categories: res}))
      .catch(res => this.setState({categories: []}))
  }

  loadAccounts() {
    this.props.route.params.getAccounts()
      .then(res => this.setState({accounts: res}))
      .catch(res => this.setState({accounts: []}))
  }

  loadTypes() {
    this.props.route.params.getTypes()
      .then(res => this.setState({types: res}))
      .catch(res => this.setState({types: res}))
  }

  filter(category_f, account_f, betweenDates, fromDate, toDate, type_f) {

    const date = betweenDates ? {"from": fromDate, "to": toDate} : undefined;
    const category = category_f === "cualquiera" ? undefined : category_f;
    const account = account_f === "cualquiera" ? undefined : account_f;
    const type = type_f ? type_f : "unico";

    const body = {
      "user_email": this.state.user_email,
      "filter": {
        "category": category,
        "account": account,
        "type": type,
        "date": date
      }
    }
    this.props.route.params.filter(body)
      .then(res => this.setState({all: res.data}))
      .catch(res => this.setState({all: []}))
  }

  update() {
    this.filter();
    this.props.route.params.update();
  }

  closeFilter() {
    this.setState({showFilter: false})
  }

  componentDidMount() {
    this.setState({all: this.props.route.params.initialItems}, this.loadTotalAmount)
    this.loadAccounts();
    this.loadCategories();
    this.loadTypes();
  }

  render = () => {
      return (
        <View style={styles.view}>
          <View style={styles.totalView}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${this.state.totalAmount}</Text>
          </View>

          <Button title="Filtrar" onPress={() => this.setState({showFilter: true})}/>

          <FilterComponent 
            isVisible={this.state.showFilter} 
            close={this.closeFilter.bind(this)} 
            onAccept={this.filter.bind(this)}
            categories={this.state.categories}
            accounts={this.state.accounts}
            types={this.state.types}
          />

          <FlatList 
            style={styles.list}
            data={this.state.all} 
            renderItem={({item}) => <ItemList onSubmit={this.update.bind(this)} navigation={this.props.navigation} editScreen={this.props.route.params.editScreen} item={item} icon={true}></ItemList>}
            keyExtractor={(item) => item._id.$oid}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white"
  },
  list: {
    paddingBottom: 20,
  },
  totalView: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  totalPrice: {
    textAlign: 'right',
    flex: 1, 
    fontSize: 20,
    marginRight: 10,
  },
  totalText: {
    textAlign: 'left',
    flex: 1,   
    fontSize: 15,
    marginLeft: 10,
  },
});

export default HistoryScreen;