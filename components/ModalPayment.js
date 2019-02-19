import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePayment } from '../actions/fullBudgetActions';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
} from 'react-native';
import formatAmount from '../lib/formatAmount';
import { months as monthNames } from '../lib/months';

class ModalPayment extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  deletePayment = _id => {
    this.setState({ modalVisible: false });
    fetch(`http://192.168.0.156:3000/payments/${_id}`, {
      method: 'DELETE',
      body: JSON.stringify({ _id }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => Alert.alert(response._bodyText))
      .then(this.props.deletePayment(_id))
      .catch(error => console.log(error));
  };

  render() {
    const { _id, name, collector, amount, months } = this.props.payment;
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View style={{ padding: 20 }}>
              <TouchableHighlight
                style={{ alignItems: 'flex-end' }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>❌</Text>
              </TouchableHighlight>
              <Text>{name}</Text>
              <Text>{collector}</Text>
              <Text>{formatAmount(amount)}</Text>
              <Text>
                {months.reduce((acc, month, i, arr) => {
                  if (!acc) return monthNames[month].name.substring(0, 3);
                  if (+arr[i - 1] + 1 !== +arr[i])
                    return `${acc}, ${monthNames[month].name.substring(0, 3)}`;
                  if (
                    +arr[i - 1] === +arr[i] - 1 &&
                    +arr[i] === +arr[i + 1] - 1
                  )
                    return acc;
                  if (
                    !arr[i + 1] ||
                    (+arr[i - 1] === +arr[i] - 1 && +arr[i] !== +arr[i + 1] - 1)
                  )
                    return `${acc} - ${monthNames[month].name.substring(0, 3)}`;
                }, '')}
              </Text>
              <Button
                color="#000"
                title="Delete"
                onPress={() => this.deletePayment(_id)}
              />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text>{name} </Text>
            <Text> {formatAmount(amount)}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

mapDispatchToPros = dispatch => bindActionCreators({ deletePayment }, dispatch);

export default connect(
  null,
  mapDispatchToPros,
)(ModalPayment);
