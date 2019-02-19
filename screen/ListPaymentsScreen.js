import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPayments } from '../actions/fullBudgetActions';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  StatusBar,
} from 'react-native';
import ModalPayment from '../components/ModalPayment';
import formatAmount from '../lib/formatAmount';
import LogoBudgy from '../navigation/LogoBudgy';

class ListPaymentsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <LogoBudgy />,
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Add')}
        color="#fff"
        title="+     "
      />
    ),
  });

  state = {
    payments: [],
    total: 0,
    remainingDays: 0,
    perDay: 0,
  };

  componentDidMount() {
    fetch('http://192.168.0.156:3000/payments')
      .then(response => response.json())
      .then(data => this.props.getPayments(data))
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
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.content} maximumZoomScale="10">
          {this.props.payments.payments.map(payment => (
            <ModalPayment
              style={styles.payment}
              key={payment._id}
              payment={payment}
            />
          ))}
        </ScrollView>
        <Text style={{ flex: 1 }}>Total {this.calculateTotal(payments)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  content: {},
  payment: {
    flexDirection: 'row',
  },
});

const mapStateToProps = ({ payments }) => ({
  payments,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPayments }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPaymentsScreen);
