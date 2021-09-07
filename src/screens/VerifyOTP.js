import React, {Component} from 'react';
import {SafeAreaView, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import styles from '../styles/VerifyOTPStyle';
import {initLogin} from '../store/actions/loginAction';

class VerifyOTP extends Component {
  state = {
    OTP: '',
  };
  redirectToLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    const {OTP} = this.state;
    const {
      email = 'eve.holt@reqres.in',
      password = 'pistol',
      user,
    } = this.props;

    if (user) {
      return <>{this.props.navigation.goBack()}</>;
    }

    return (
      <SafeAreaView style={[styles.main]}>
        <Image
          source={require('../assests/images/swiggyTagline.png')}
          style={[styles.tagLine]}
        />
        <TextInput
          style={[styles.inputOTP]}
          placeholder="Enter OTP"
          value={OTP}
          onChangeText={value => this.setState({OTP: value})}
        />
        <Button
          title="Verify OTP"
          onPress={() => this.props.initLogin({email, password})}
        />
      </SafeAreaView>
    );
  }
}

// export default Profile;

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {initLogin})(VerifyOTP);
