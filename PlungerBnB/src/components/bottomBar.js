import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles'

class BottomBar extends Component {
  render() {
    return (
      <View style={styles.bottomContainer}>
        <Text>Profile/Deliverer Section</Text>
      </View>
    );
  }
}

export default BottomBar;
