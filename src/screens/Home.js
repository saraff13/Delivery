import React, {Component} from 'react';
import {Image, View, ScrollView, Text} from 'react-native';
import styles from '../styles/HomeStyle';
import HomeHeader from '../components/HomeHeader';
import Button from '../components/Button';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <>
        <HomeHeader title="Home" navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.main]}>
          <Image
            style={{height: 200, width: 400}}
            source={require('../assests/images/swiggyDelivery.jpg')}
          />
          <View style={[styles.lastButton]}>
            <Button
              title="See all restaurants"
              onPress={() => this.props.navigation.navigate('Restaurants')}
            />
          </View>
          <Image
            source={require('../assests/images/swiggyTagline.png')}
            style={[styles.tagLine]}
          />
        </ScrollView>
      </>
    );
  }
}

export default connect(null)(Home);
