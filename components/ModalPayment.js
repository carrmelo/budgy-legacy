import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import formatAmount from '../lib/formatAmount';
import { months as monthNames } from '../lib/months';
export default class ModalPayment extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { name, collector, amount, months } = this.props.payment;
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
              {months.reduce((acc, month) => {
                return acc ? (
                  <Text>
                    {acc},{monthNames[month].substring(0, 3)}
                  </Text>
                ) : (
                  <Text>{monthNames[month].substring(0, 3)}</Text>
                );
              }, '')}
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
