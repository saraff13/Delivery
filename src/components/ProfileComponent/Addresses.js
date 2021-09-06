import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';

class Addresses extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} title="MANAGE ADDRESSES" />
        <View>
          <Text>Addresses</Text>
        </View>
      </>
    );
  }
}

export default connect(null)(Addresses);
