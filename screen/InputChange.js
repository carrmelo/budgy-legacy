import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Button,
  FlatList,
  Text,
} from 'react-native';
import formatAmount from '../lib/formatAmount';

const months = [
  'January',
  'February',
  ' March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default class InputChange extends Component {
  state = {
    payment: '',
    collector: '',
    amount: '',
  };

  handleChange = (text, name) => {
    if (name === 'amount') {
      // text = parseInt(text) === NaN ? 0 : text;
      text = text.replace(/[^0-9]/g, '');
    }
    this.setState({ [name]: text });
    console.log(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          style={{ height: 40 }}
          value={this.state.payment}
          placeholder="payment"
          onChangeText={text => this.handleChange(text, 'payment')}
          onSubmitEditing={() => console.log(this.state)}
        />
        <TextInput
          style={{ height: 40 }}
          value={this.state.collector}
          placeholder="collector"
          onChangeText={text => this.handleChange(text, 'collector')}
        />
        <TextInput
          style={{ height: 40, width: 100, textAlign: 'center' }}
          keyboardType="numeric"
          returnKeyType="done"
          value={this.state.amount ? formatAmount(this.state.amount) : ''}
          placeholder="amount"
          onChangeText={text => this.handleChange(text, 'amount')}
        />

        <Button
          onPress={() => Alert.alert('Salvado')}
          color="#40b34f"
          title="Save"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});
