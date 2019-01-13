import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native';

const test = (
  <Text onPress={() => Alert.alert('Pressed')}>I'm gonna be a table</Text>
);

export default class TableList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ScrollView style={styles.content} maximumZoomScale="10">
          {Array(10)
            .fill(test)
            .map((test, i) => (
              <View key={i}>{test}</View>
            ))}
        </ScrollView>
        <Text style={{ flex: 1 }}>Total</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  content: {
    flex: 10
  }
});
