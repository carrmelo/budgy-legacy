import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListPaymentsScreen from './screen/ListPaymentsScreen';
import AppContainer from './navigation/AppNavigator';
import AddPaymentScreen from './screen/AddPaymentScreen';

export default class App extends Component {
  render() {
    return <AppContainer />;
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
