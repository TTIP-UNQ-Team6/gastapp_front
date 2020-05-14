import React, { Component } from 'react';
import { createRootNavigator } from './src/router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  render() {
    return createRootNavigator(this.state.signedIn);
  }

}