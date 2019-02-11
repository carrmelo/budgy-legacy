import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class LogoBudgy extends Component {
  render() {
    let pic = {
      uri:
        'https://vignette.wikia.nocookie.net/videojuego/images/6/63/Dinero.png/revision/latest?cb=20151022150411&format=original',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Full Budgy</Text>
        <Image source={pic} style={styles.logo} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40b34f',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
  },
  logo: {
    width: 25,
    height: 25,
  },
});
