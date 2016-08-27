import React, { Component } from 'react';
import { MapView } from 'react-native';

import styles from '../styles/styles'

class MainMap extends Component {
  render() {
    return (
      <MapView 
        style={styles.mapContainer}
        showsUserLocation={true}
        followUserLocation={true}
      />
    );
  }
}

export default MainMap;
