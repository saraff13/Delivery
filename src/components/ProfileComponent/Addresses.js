import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class Addresses extends Component {
  render() {
    return (
      <View>
        <Text>Addresses</Text>
      </View>
    );
  }
}

export default connect(null)(Addresses);
