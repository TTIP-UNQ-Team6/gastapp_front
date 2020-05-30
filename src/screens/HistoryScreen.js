import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ItemList from '../components/ItemList';

class HistoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_email: props.route.params.user_email,
      all: [],
      totalAmount: 0,
    }
  }

  loadAll() {
    this.props.route.params.getAll(this.state.user_email)
    .then(res => this.setState({all: res}))
    .catch(e => this.setState({all: []}));
  }

  loadTotalAmount() {
    this.props.route.params.getTotal(this.state.user_email).then(res => {this.setState({totalAmount: res[0]["total"]})}).catch(e => this.setState({totalAmount: 0}));
  }

  update() {
    this.loadAll();
    this.props.route.params.update();
  }

  componentDidMount() {
    this.loadAll();
    this.loadTotalAmount();
  }

  render = () => {
      return (
        <View style={styles.view}>
          <View style={styles.totalView}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${this.state.totalAmount}</Text>
          </View>

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