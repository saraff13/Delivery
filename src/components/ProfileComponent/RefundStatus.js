import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class RefundStatus extends Component {
  render() {
    return (
      <View>
        <Text>RefundStatus</Text>
      </View>
    );
  }
}

export default connect(null)(RefundStatus);
