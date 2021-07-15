import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/CurrentLocationStyle';

class CurrentLocation extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>CurrentLocation</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(CurrentLocation);
