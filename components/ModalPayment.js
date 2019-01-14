import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import formatAmount from '../lib/formatAmount';

export default class ModalPayment extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
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
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>❌</Text>
              </TouchableHighlight>
              <Text>{this.props.payment.name}</Text>
              <Text>{this.props.payment.collector}</Text>
              <Text>{this.props.payment.amount}</Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text>{this.props.payment.name} </Text>
            <Text> {formatAmount(this.props.payment.amount)}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
