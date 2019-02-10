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
import { months } from '../lib/months';

export default class AddPaymentScreen extends Component {
  state = {
    name: '',
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
  };

  // componentDidUpdate() {
  //   console.log('holh', this.state);
  // }

  select = i => {
    this.setState(({ months }) => {
      if (months.has(i)) {
        const newMonths = new Set(months);
        newMonths.delete(i);
        return { months: newMonths };
      } else return { months: new Set(months.add(i)) };
    });
  };

  handleSubmit = () => {
    const { name, collector, amount, months } = this.state;
    const body = {
      name,
      collector,
      amount: +amount,
      months: Array.from(months).sort((a, b) => (a > b ? 1 : -1)),
    };

    fetch('http://192.168.0.156:3000/payments', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => console.log(response))
      .then(() => {
        this.setState({
          name: '',
          collector: '',
          amount: '',
          months: new Set(),
        });
        this.props.navigation.goBack();
      })
      .catch(error => console.log(error));
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
            value={this.state.name}
            placeholder="name"
            onChangeText={text => this.handleChange(text, 'name')}
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
                  <Text style={{ color: '#fff' }}>{month.substring(0, 3)}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
        <Button onPress={this.handleSubmit} color="#40b34f" title="Save" />
        <Button
          onPress={() => this.props.navigation.navigate('List')}
          color="#40b34f"
          title="List"
        />
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
