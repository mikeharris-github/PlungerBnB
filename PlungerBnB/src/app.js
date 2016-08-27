import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles/styles'
import Header from './components/header'
import MainMap from './components/mainMap'
import BottomBar from './components/bottomBar'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MainMap />
        <BottomBar />
      </View>
    );
  }
}

export default App;
