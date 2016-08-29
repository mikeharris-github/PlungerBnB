'use strict';

import React, { Component } from 'react';
import { View, Text, AsyncStorage, AlertIOS } from 'react-native';

import styles from './styles/styles'
import MainMap from './components/mainMap'

class UpdateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      latitude: "",
      longitude: "",
      uniqueDeviceToken: "",
      requestingPlunger: false,
      currentlyDelivering: false,
      alertIsShown: false,
      requestorId: null,
      deliverLatitude: '',
      deliverLongitude: ''
    };

    var uniqueDeviceToken;
    AsyncStorage.getItem('uniqueDeviceToken').then((value) => {
      if (value) {
        console.log("value exists!! this is value");
        console.log(value);
        uniqueDeviceToken = value;
      } else {
        console.log("value NOOOT exists!!");
        uniqueDeviceToken = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        AsyncStorage.setItem('uniqueDeviceToken', uniqueDeviceToken);
        console.log("this is uniqueDeviceToken");
        console.log(uniqueDeviceToken);
      }
      this.setState({uniqueDeviceToken: uniqueDeviceToken});
    }).done();

    // var uniqueDeviceToken = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    //
    // AsyncStorage.setItem('uniqueDeviceToken', uniqueDeviceToken);
    //
    // this.setState({'uniqueDeviceToken': uniqueDeviceToken});

    console.log(uniqueDeviceToken);
    console.log("this is this.state");
    console.log(this.state);

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
              longitude: userLongitude,
              unique_device_token: this.state.uniqueDeviceToken,
              requesting_plunger: this.state.requestingPlunger
            })
          })
          .then((response) => response.json())
          .then((responseData) => {
            console.log("responseData in updateLocation");
            console.log(responseData);
            if (!this.state.currentlyDelivering && !this.state.alertIsShown) {
              AlertIOS.alert(
               'Someone requested a plunger!!!!!',
               'Would you like to deliver??',
               [
                 {text: 'No', onPress: () => this.setState({alertIsShown: false}), style: 'cancel'},
                 {text: 'Yes', onPress: () => {
                   this.setState({requestorId: responseData.id});
                   console.log("this is repsonseData.id");
                   console.log(responseData.id);
                   fetch('http://172.28.116.238:3000/accept_job', {
                     method: 'POST',
                     headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                       latitude: userLatitude,
                       longitude: userLongitude,
                       unique_device_token: this.state.uniqueDeviceToken,
                       requestor_id: this.state.requestorId
                     })
                   })
                   this.setState({
                     alertIsShown: false,
                     currentlyDelivering: true,
                     deliverLatitude: responseData.latitude,
                     deliverLongitude: responseData.longitude
                   });
                 },
               ],
              );

              this.setState({alertIsShown: true});
            }
          }).done();
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }, 2000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <MainMap deliverCoords={this.state.deliverCoords}/>
    );
  }
}

export default UpdateLocation;
