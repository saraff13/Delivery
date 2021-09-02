import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class PaymentModes extends Component {
  render() {
    return (
      <View>
        <Text>PaymentModes</Text>
      </View>
    );
  }
}

export default connect(null)(PaymentModes);
