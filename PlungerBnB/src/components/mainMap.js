import React, { Component } from 'react';
import { MapView } from 'react-native';

import styles from '../styles/styles'

class MainMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      deliverCoords: {
        latitude: this.props.deliverCoords.latitude,
        longitude: this.props.deliverCoords.longitude
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
