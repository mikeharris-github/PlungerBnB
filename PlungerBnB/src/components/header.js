'use strict'

import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles/styles'

class Header extends Component {

  _handleRequestClick() {
    var uniqueDeviceToken;
    AsyncStorage.getItem('uniqueDeviceToken').then((value) => {
      if (value) {
        console.log("value exists!! this is value");
        console.log(value);
        uniqueDeviceToken = value;

        console.log("Request Plunger! this is uniqueDeviceToken");
        console.log(uniqueDeviceToken);
        fetch('http://172.28.116.238:3000/request_plunger', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            unique_device_token: uniqueDeviceToken
          })
        });
      } else {
        console.log("value NOOOT exists!!");
        uniqueDeviceToken = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        AsyncStorage.setItem('uniqueDeviceToken', uniqueDeviceToken);
        console.log("this is uniqueDeviceToken");
        console.log(uniqueDeviceToken);

        console.log("Request Plunger! this is uniqueDeviceToken");
        console.log(uniqueDeviceToken);
        fetch('http://172.28.116.238:3000/request_plunger', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            unique_device_token: uniqueDeviceToken
          })
        });

        console.log("afterwards ");
      }
    }).done();


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
