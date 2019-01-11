import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TableList from './components/TableList';
import AppHeader from './navigation/AppHeader';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <TableList />
        <View>
          <Text>Total</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
