import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Cart from './Cart';
import RestaurantDetails from '../components/homeComponent/navigatingPages/RestaurantDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopPicks from '../components/homeComponent/TopPicks';

const Icon = MaterialCommunityIcons;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        tabBarOptions={customTabBarStyle}>
        <Tab.Screen name="SWIGGY" component={HomeStack} />

        <Tab.Screen name="SEARCH" component={Search} />

        <Tab.Screen name="CART" component={Cart} options={{tabBarBadge: 0}} />

        <Tab.Screen name="ACCOUNT" component={Profile} />
      </Tab.Navigator>
    );
  }
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
