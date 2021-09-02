import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class Favourites extends Component {
  render() {
    return (
      <View>
        <Text>Favourites</Text>
      </View>
    );
  }
}

export default connect(null)(Favourites);
