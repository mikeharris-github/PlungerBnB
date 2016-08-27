import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles/styles'

class Header extends Component {

  _handleRequestClick() {
    console.log("Request Plunger!");
    fetch('http://172.28.116.238:3000/request_plunger', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: userLatitude,
        longitude: userLongitude,
        unique_device_token: this.state.uniqueDeviceToken
      })
    })
    .then((response) => response.json())
    .then((responseData) => console.log(responseData)).done();
  }

  _handleOfferClick() {
    console.log("Offer Plunger!")
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>PlungerBnB</Text>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'red', marginRight: 30 }}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this._handleRequestClick()}>
            Request!
          </Button>
          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'red'}}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this._handleOfferClick()}>
            Offer Plunger!
          </Button>
        </View>

      </View>
    );
  }
}

export default Header;
