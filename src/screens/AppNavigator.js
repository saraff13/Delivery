import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Cart from './Cart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;
const Tab = createBottomTabNavigator();

export default class AppNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="SWIGGY"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'SWIGGY') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'SEARCH') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'CART') {
              iconName = focused ? 'shopping' : 'shopping-outline';
            } else if (route.name === 'ACCOUNT') {
              iconName = focused ? 'account' : 'account-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabStyle: {paddingBottom: 7, paddingTop: 3},
        }}>
        <Tab.Screen name="SWIGGY" component={Home} />

        <Tab.Screen name="SEARCH" component={Search} />

        <Tab.Screen name="CART" component={Cart} options={{tabBarBadge: 0}} />

        <Tab.Screen name="ACCOUNT" component={Profile} />
      </Tab.Navigator>
    );
  }
}
