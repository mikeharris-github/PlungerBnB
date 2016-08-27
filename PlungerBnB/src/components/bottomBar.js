import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/styles'

class BottomBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'Request',
    }
  }
  render() {
    return (
      <View style={styles.bottomBarContainer}>{this.showContent()}</View>
    );
  }
  showContent() {
    if (this.state.selectedTab == 'Delivery') {
      return (
        <View style={styles.container}>
          <View style={styles.bottomContainer}>
            <View style={styles.profile}>
              <Image style={styles.profileImage} />
            </View>
          </View>
          <View style={styles.profileName}>
            <Text>Profile name</Text>
            <Text>Profile info</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.bottomBarContainer}>
          <View style={styles.container}>
            <View style={styles.bottomContainer}>
              <View style={styles.profile}>
                <Image style={styles.profileImage} />
              </View>
            </View>
            <View style={styles.profileName}>
              <Text>Profile name</Text>
              <Text>Profile info</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.bottomDelivererContainer}>
              <View style={styles.delivererProfile}>
                <Image style={styles.profileImage} />
              </View>
            </View>
            <View style={styles.delivererName}>
              <Text>Deliverer name</Text>
              <Text>Deliverer info</Text>
            </View>
          </View>
        </View>
      )
    }
  }
}

export default BottomBar;
