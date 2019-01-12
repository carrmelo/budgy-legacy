import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class InputChange extends Component {
  state = {
    payment: '',
    collector: '',
    amount: 0
  };

  handleChange = (text, name) => {
    this.setState({ [name]: text });
    console.log(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          value={this.state.payment}
          placeholder="payment"
          onChangeText={text => this.handleChange(text, 'payment')}
        />
        <TextInput
          style={{ height: 40 }}
          value={this.state.collector}
          placeholder="collector"
          onChangeText={text => this.handleChange(text, 'collector')}
        />
        <TextInput
          style={{ height: 40 }}
          keyboardType="numeric"
          value={this.state.amout}
          placeholder="amount"
          onChangeText={text => this.handleChange(text, 'amount')}
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
