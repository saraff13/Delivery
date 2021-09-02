import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {responsiveWidth} from '../../utils/Responsive';
import Header from '../Header';

class RefundStatus extends Component {
  render() {
    return (
      <>
        <Header
          showOnlyBackIcon
          navigation={this.props.navigation}
          title="ACTIVE REFUNDS"
        />
        <View style={[styles.main]}>
          <Text style={[styles.message]}>You don't have any Active Refund</Text>
        </View>
      </>
    );
  }
}

export default connect(null)(RefundStatus);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    width: responsiveWidth(35),
    textAlign: 'center',
    fontSize: 17,
  },
});
