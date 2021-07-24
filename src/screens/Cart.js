import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/CartStyle';

class Cart extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Image
          source={require('../assests/images/swiggyCart.png')}
          style={[styles.emptyCartImage]}
        />
        <TouchableOpacity
          style={[styles.browseButton]}
          onPress={() => this.props.navigation.navigate('SWIGGY')}>
          <Text style={[styles.browseButtonText]}>BROWSE RESTAURANTS</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default connect(null)(Cart);
