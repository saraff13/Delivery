import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/RestaurantOffersStyle';

class RestaurantOffers extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Restaurant Offers</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(RestaurantOffers);
