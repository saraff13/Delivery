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
import RestaurantDetails from '../components/homeComponent/navigatingPages/RestaurantDetails';

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
