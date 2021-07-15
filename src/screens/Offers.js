import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/OffersStyle';

class Offers extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Offers</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(Offers);
