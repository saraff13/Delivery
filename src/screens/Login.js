import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {initLogin} from '../store/actions/loginAction';
import Button from '../components/Button';
import styles from '../styles/LoginStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Login extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  render() {
    const {email, password} = this.state;

    return (
      <SafeAreaView style={[styles.main]}>
        <Image
          source={require('../assests/images/swiggyTagline.png')}
          style={[styles.tagLine]}
        />
        <View style={[styles.detailBox]}>
          <Text style={[styles.tabName]}>ACCOUNT</Text>
          <Text style={[styles.tabFunction]}>
            Login/Create Account quickly to manage orders
          </Text>
          <Button
            title="LOGIN"
            onPress={() => this.props.navigation.navigate('VerifyOTP')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Offers')}
            style={[styles.offersNavigator]}>
            <View style={[styles.iconAndDetailWrap]}>
              <Icon name="file-percent-outline" style={[styles.icon]} />
              <Text style={[styles.touchableTitle]}>Offers</Text>
            </View>
            <Icon name="chevron-right" size={25} color="dimgrey" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.feedbackNavigator]}>
            <View style={[styles.iconAndDetailWrap]}>
              <Icon name="email-outline" style={[styles.icon]} />
              <View>
                <Text style={[styles.touchableTitle]}>Send Feedback</Text>
                <Text
                  style={[styles.version]}>{`App Version 3.49.2 (926)`}</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={25} color="dimgrey" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(null, {initLogin})(Login);
