import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../../../utils/Colors';
import Header from '../../Header';

class CuisinesRestaurants extends Component {
  render() {
    // console.log(this.props.route.params.item);
    const {avatar, email, first_name, last_name, id} =
      this.props.route.params.item;
    return (
      <>
        <Header navigation={this.props.navigation} showOnlyBackIcon />
        <SafeAreaView style={[styles.main]}>
          <Text>ID: {id}</Text>
          <Text>Email: {email}</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default connect(null)(CuisinesRestaurants);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
});
