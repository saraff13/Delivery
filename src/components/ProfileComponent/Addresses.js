import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';

class Addresses extends Component {
  render() {
    return (
      <>
        <View>
          <Text>Addresses</Text>
        </View>
        <Header
          position={'absolute'}
          navigation={this.props.navigation}
          title="MANAGE ADDRESSES"
        />
      </>
    );
  }
}

export default connect(null)(Addresses);
