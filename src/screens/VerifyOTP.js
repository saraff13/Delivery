import React, {Component} from 'react';
import {SafeAreaView, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import styles from '../styles/VerifyOTPStyle';
import {initRegistration} from '../store/actions/registerAction';
import Login from './Login';

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
      success,
    } = this.props;

    if (success) {
      return <Login />;
    }

    // if(success){
    //     setTimeout(() => {
    //         this.redirectToLogin();
    //     }, 10000);
    //     return (
    //         <View style={[styles.redirect]}>
    //             <Text>
    //                 You will be redirected to Login Page in 10 seconds!!
    //             </Text>
    //             <View style = {[styles.redirectBox]}>
    //                 <Text>Otherwise &nbsp;</Text>
    //                 <TouchableOpacity
    //                     onPress = {() => this.props.navigation.navigate('Login')}
    //                 >
    //                     <Text style = {[styles.redirectLink]}>click here</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     );
    // }

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
          onPress={() => this.props.initRegistration({email, password})}
        />
      </SafeAreaView>
    );
  }
}

// export default Profile;

const mapStateToProps = state => ({
  success: state.registerReducer.success,
});

export default connect(mapStateToProps, {initRegistration})(VerifyOTP);
