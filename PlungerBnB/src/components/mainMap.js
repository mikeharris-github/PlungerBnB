'use strict';

import React, { Component } from 'react';
import { MapView } from 'react-native';

import styles from '../styles/styles';

class MainMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deliverCoords: {
        latitude: 41.8872918,
        longitude: -87.6330064
      }
    }
  }

  render() {
    return (
      <MapView
        annotations={[this.state.deliverCoords]}
        style={styles.mapContainer}
        showsUserLocation={true}
        followUserLocation={true}
      />
    );
  }
}

export default MainMap;
