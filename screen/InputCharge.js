import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InputChange extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'white' }} />
        <View style={{ flex: 9 }}>
          <Text>I'm gonna be a table</Text>
        </View>
        <Text style={{ flex: 1 }}>Total</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center'
  }
});
