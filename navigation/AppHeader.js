import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class AppHeader extends Component {
  render() {
    let pic = {
      uri:
        'https://vignette.wikia.nocookie.net/videojuego/images/6/63/Dinero.png/revision/latest?cb=20151022150411&format=original'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Budgy!</Text>
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
    width: '100%',
    height: 70
  },
  title: {
    fontSize: 45,
    color: '#FFF'
  },
  logo: {
    width: 60,
    height: 60
  }
});
