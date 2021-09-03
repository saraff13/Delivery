import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import CurrentLocation from './CurrentLocation';
import Register from './Register';
import AppNavigator from './AppNavigator';
import Offers from './Offers';
import VerifyOTP from './VerifyOTP';
import Restaurants from './Restaurants';
import Map from './Map';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {setLoginData} from '../store/actions/loginAction';
import Loader from '../components/Loader';
import RestaurantDetails from './restaurantDetails/RestaurantDetails';
import CouponsRestaurants from '../components/homeComponent/navigatingPages/CouponsRestaurants';
import CuisinesRestaurants from '../components/homeComponent/navigatingPages/CuisinesRestaurants';
import ImageSlidersRestaurants from '../components/homeComponent/navigatingPages/ImageSlidersRestaurants';
import Help from '../components/ProfileComponent/Help';
import SwiggyMoney from '../components/ProfileComponent/SwiggyMoney';
import Addresses from '../components/ProfileComponent/Addresses';
import Favourites from '../components/ProfileComponent/Favourites';
import RefundStatus from '../components/ProfileComponent/RefundStatus';
import PaymentModes from '../components/ProfileComponent/PaymentModes';

const Stack = createStackNavigator();

class Auth extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) this.props.setLoginData(JSON.parse(data));
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
      });
  }
  render() {
    const {user} = this.props;
    const {loading} = this.state;
    // console.log(user);

    // if(user)return <Home />;
    // return <Login />;

    if (loading) {
      return <Loader loading={loading} />;
    }

    return (
      <NavigationContainer>
        {user ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="AppNavigator"
              component={AppNavigator}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="CouponsRestaurants"
              component={CouponsRestaurants}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="CuisinesRestaurants"
              component={CuisinesRestaurants}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="ImageSlidersRestaurants"
              component={ImageSlidersRestaurants}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Restaurants"
              component={Restaurants}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="RestaurantDetails"
              component={RestaurantDetails}
            />
            <Stack.Screen
              options={{headerShown: true}}
              name="CurrentLocation"
              component={CurrentLocation}
            />
            <Stack.Screen
              options={{headerShown: true}}
              name="Map"
              component={Map}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Offers"
              component={Offers}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Help"
              component={Help}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="SwiggyMoney"
              component={SwiggyMoney}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Addresses"
              component={Addresses}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Favourites"
              component={Favourites}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="RefundStatus"
              component={RefundStatus}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="PaymentModes"
              component={PaymentModes}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="VerifyOTP"
              component={VerifyOTP}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

// export default Auth;

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {setLoginData})(Auth);
