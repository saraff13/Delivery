import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class SwiggyMoney extends Component {
  render() {
    return (
      <View>
        <Text>Swiggy Money</Text>
      </View>
    );
  }
}

export default connect(null)(SwiggyMoney);
