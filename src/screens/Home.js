import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import styles from '../styles/HomeStyle';
import HomeHeader from '../components/HomeHeader';
import Button from '../components/Button';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <>
        <HomeHeader title="Home" navigation={this.props.navigation} />
        <ScrollView></ScrollView>
      </>
    );
  }
}

export default connect(null)(Home);
