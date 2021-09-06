import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyCoupons from '../components/offersComponent/MyCoupons';
import RestaurantOffers from '../components/offersComponent/RestaurantOffers';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

class Offers extends Component {
  render() {
    return (
      <>
        <Header title="OFFERS" navigation={this.props.navigation} />
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize: 13},
            tabStyle: {width: responsiveWidth(50)},
            style: {},
            indicatorStyle: {borderBottomWidth: 2},
            activeTintColor: 'black',
          }}>
          <Tab.Screen name="Restaurant Offers" component={RestaurantOffers} />
          <Tab.Screen name="My Coupons" component={MyCoupons} />
        </Tab.Navigator>
      </>
    );
  }
}

export default connect(null)(Offers);
