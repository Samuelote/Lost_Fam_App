import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './rootNavigator'
import { store } from './src/store/index';
import { authenticateUser } from './src/store/actions/user_actions';


export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
          <RootNavigator/>
      </Provider>
    );
  }
}
