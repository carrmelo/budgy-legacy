import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TableList from './screen/TableList';
import AppHeader from './navigation/AppHeader';
import AppNavigator from './navigation/AppNavigator';
import InputChange from './screen/InputChange';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        {/* <TableList /> */}
        <InputChange />
        {/* <AppNavigator /> */}
      </View>
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
