import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native';
import ModalPayment from '../components/ModalPayment';
import formatAmount from '../lib/formatAmount';

export default class TableList extends Component {
  state = {
    payments: [],
    total: 0,
    remainingDays: 0,
    perDay: 0,
  };

  componentDidMount() {
    fetch('http://192.168.0.156:3000/payments')
      .then(response => response.json())
      .then(data => this.setState({ payments: [...data] }))
      .catch(error => console.log(error));
  }

  // componentDidUpdate() {
  //   console.log('hola', this.state);
  // }

  calculateTotal(payments) {
    return formatAmount(
      payments.reduce((acc, payment) => payment.amount + acc, 0),
    );
  }

  render() {
    const { payments } = this.state;
    console.log('In', !payments.length === false);
    return (
      <ScrollView style={styles.container}>
        <ScrollView style={styles.content} maximumZoomScale="10">
          {payments.map(payment => (
            <ModalPayment
              style={styles.payment}
              key={payment._id}
              payment={payment}
            />
          ))}
        </ScrollView>
        <Text style={{ flex: 1 }}>Total {this.calculateTotal(payments)}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 10,
  },
  payment: {
    flexDirection: 'row',
  },
});
