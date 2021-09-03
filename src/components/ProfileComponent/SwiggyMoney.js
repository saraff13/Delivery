import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';

class SwiggyMoney extends Component {
  render() {
    return (
      <>
        <View style={[styles.main]}>
          <Text>Swiggy Money</Text>
        </View>
        <Header navigation={this.props.navigation} position={'absolute'} />
      </>
    );
  }
}

export default connect(null)(SwiggyMoney);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
