import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>PlungerBnB</Text>
        <Text>Request or Offer Plunger Section</Text>
      </View>
    );
  }
}

export default Header;
