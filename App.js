import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import paymentsReducer from './reducers/fullBudgetReducer';
import ListPaymentsScreen from './screen/ListPaymentsScreen';
import AppContainer from './navigation/AppNavigator';
import AddPaymentScreen from './screen/AddPaymentScreen';

const store = createStore(paymentsReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
