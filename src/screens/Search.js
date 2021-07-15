import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/SearchStyle';

class Search extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>My Search</Text>
      </SafeAreaView>
    );
  }
}

// export default Profile;

export default connect(null)(Search);
