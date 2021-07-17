import React, {Component} from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import styles from '../styles/CartStyle';

class Cart extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Image
          source={require('../assests/images/swiggyCart.png')}
          style={[styles.emptyCartImage]}
        />
        <Button
          title="BROWSE RESTAURANTS"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </SafeAreaView>
    );
  }
}

// export default Profile;

export default connect(null)(Cart);
