import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles/styles'
import Header from './components/header'
import MainMap from './components/mainMap'
import BottomBar from './components/bottomBar'

class UpdateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      latitude: "",
      longitude: ""
    };

    // Toggle the state every second
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var initialPosition = JSON.stringify(position);
          let userLatitude = JSON.stringify(position.coords.latitude);
          let userLongitude = JSON.stringify(position.coords.longitude);
          this.setState({userLatitude, userLongitude});

          fetch('http://172.28.116.238:3000/update_user', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              latitude: userLatitude,
              longitude: userLongitude
            })
          });
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }, 2000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UpdateLocation />
        <Header />
        <MainMap />
        <BottomBar />
      </View>
    );
  }
}

export default App;
