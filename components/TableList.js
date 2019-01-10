import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TableList extends Component {
  render() {
    return (
      <View>
        <Text>I'm gonna be a table</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
