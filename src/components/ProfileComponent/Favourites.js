import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';

class Favourites extends Component {
  render() {
    return (
      <>
        <FlatList />
        <Header
          position={'absolute'}
          navigation={this.props.navigation}
          title="FAVOURITES"
        />
      </>
    );
  }
}

export default connect(null)(Favourites);
