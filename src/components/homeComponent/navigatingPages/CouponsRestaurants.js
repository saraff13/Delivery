import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../../../utils/Colors';

class CouponsRestaurants extends Component {
  render() {
    // console.log(this.props.route.params.item);
    const {avatar, email, first_name, last_name, id} =
      this.props.route.params.item;
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>ID: {id}</Text>
        <Text>Email: {email}</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(CouponsRestaurants);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
});
