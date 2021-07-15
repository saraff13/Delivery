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
    const customTabBarStyle = {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {borderWidth: 2, paddingBottom: 7, paddingTop: 3},
    };
    return (
      <Tab.Navigator
        style={{color: 'green'}}
        initialRouteName="Dashboard"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'shopping' : 'shopping-outline';
            } else if (route.name === 'My Account') {
              iconName = focused ? 'account' : 'account-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={customTabBarStyle}>
        <Tab.Screen name="Dashboard" component={Home} />

        <Tab.Screen name="Search" component={Search} />

        <Tab.Screen name="Cart" component={Cart} options={{tabBarBadge: 0}} />

        <Tab.Screen name="My Account" component={Profile} />
      </Tab.Navigator>
    );
  }
}
