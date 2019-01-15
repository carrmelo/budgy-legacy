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
  ScrollView,
  TouchableHighlight,
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
    months: new Set(),
  };

  handleChange = (text, name) => {
    if (name === 'amount') {
      // text = parseInt(text) === NaN ? 0 : text;
      text = text.replace(/[^0-9]/g, '');
    }
    this.setState({ [name]: text });
    console.log(this.state);
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  select = i => {
    this.setState(({ months }) => {
      if (months.has(i)) {
        const newMonths = new Set(months);
        newMonths.delete(i);
        return { months: newMonths };
      } else return { months: new Set(months.add(i)) };
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{ height: 40, width: 100, textAlign: 'center' }}
            value={this.state.payment}
            placeholder="payment"
            onChangeText={text => this.handleChange(text, 'payment')}
            onSubmitEditing={() => console.log(this.state)}
          />
          <TextInput
            style={{ height: 40, width: 100, textAlign: 'center' }}
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
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {months.map((month, i) => (
              <TouchableHighlight
                key={i}
                style={{
                  width: 80,
                  height: 30,
                  backgroundColor: '#87f294',
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.select(i)}
                underlayColor="#40b34f"
              >
                <View borderStyle="solid" borderColor="red" borderWidth="5">
                  <Text style={{ color: '#fff' }}>{month}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
          <Button
            onPress={() => Alert.alert('Salvado')}
            color="#40b34f"
            title="Save"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});
