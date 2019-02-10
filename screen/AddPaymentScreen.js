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
import { months as monthNames } from '../lib/months';
import formatNumberInput from '../lib/formatNumberInput';

export default class AddPaymentScreen extends Component {
  static navigationOptions = {
    title: 'New Payment',
  };

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

  selectOne = i => {
    this.setState(({ months }) => {
      if (months.has(i)) {
        const newMonths = new Set(months);
        newMonths.delete(i);
        return { months: newMonths };
      } else return { months: new Set(months.add(i)) };
    });
  };

  selectAll = () => {
    this.setState(({ months }) => {
      return this.state.months.size === 12
        ? { months: new Set() }
        : { months: new Set(monthNames.map((month, i) => i)) };
    });
  };

  // if (checked) {
  //   return { favorites: new Set(favorites.add(item)) };
  // } else {
  //   const newFavorites = new Set(favorites);
  //   newFavorites.delete(item);
  //   return { favorites: newFavorites };
  // }

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
      .then(response => Alert.alert(response._bodyText))
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, width: 100, textAlign: 'center' }}
              keyboardType="numeric"
              returnKeyType="done"
              value={
                this.state.amount ? formatNumberInput(this.state.amount) : ''
              }
              placeholder="amount"
              onChangeText={text => this.handleChange(text, 'amount')}
            />
            <Text>€</Text>
          </View>
          <TouchableHighlight
            style={{
              width: '30%',
              height: 30,
              backgroundColor:
                this.state.months.size === 12 ? '#87f294' : '#87a094',
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.selectAll()}
            underlayColor="#40b34f"
          >
            <Text style={{ color: '#fff' }}>Every Month</Text>
          </TouchableHighlight>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {monthNames.map((month, i) => (
              <TouchableHighlight
                key={i}
                style={{
                  width: 80,
                  height: 30,
                  backgroundColor: this.state.months.has(i)
                    ? '#87f294'
                    : '#87a094',
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.selectOne(i)}
                underlayColor="#40b34f"
              >
                <View>
                  <Text style={{ color: '#fff' }}>
                    {month.name.substring(0, 3)}
                  </Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
        <Button
          onPress={this.handleSubmit}
          color="#40b34f"
          title="Save"
          disabled={
            !this.state.name ||
            !this.state.collector ||
            !this.state.amount ||
            this.state.months.size === 0
          }
        />
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
