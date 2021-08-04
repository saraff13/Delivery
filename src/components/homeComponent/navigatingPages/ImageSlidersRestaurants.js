import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../../../utils/Colors';

class ImageSlidersRestaurants extends Component {
  render() {
    // console.log(this.props.route.params);
    const {index} = this.props.route.params;
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Image Index: {index}</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(ImageSlidersRestaurants);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
});
