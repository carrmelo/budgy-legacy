import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class InputChange extends Component {
  state = {
    payment: '',
    company: '',
    amount: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{ height: 40 }} placeholder="payment" />
        <TextInput style={{ height: 40 }} placeholder="collector" />
        <TextInput
          style={{ height: 40 }}
          keyboardType="numeric"
          placeholder="amount"
        />
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
    textAlign: 'center'
  }
});
