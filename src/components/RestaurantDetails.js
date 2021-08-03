import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/RestaurantDetailsStyle';

class RestaurantDetails extends Component {
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

export default connect(null)(RestaurantDetails);
