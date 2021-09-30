import React, {Component, createRef} from 'react';
import {
  SafeAreaView,
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import styles from '../styles/VerifyOTPStyle';
import {initLogin} from '../store/actions/loginAction';
import Header from '../components/Header';

class VerifyOTP extends Component {
  state = {
    inputRefs: Array(6).fill(createRef()),
    currOTP: Array(6).fill(''),
  };
  countOTP(currOTP) {
    for (let i = 0; i < 6; i++) {
      if (currOTP[i] == '') return false;
    }
    return true;
  }
  render() {
    const {inputRefs, currOTP} = this.state;
    const {
      email = 'eve.holt@reqres.in',
      password = 'pistol',
      user,
    } = this.props;
    const {mobileNo} = this.props.route.params;

    if (user) {
      return <>{this.props.navigation.goBack()}</>;
    }

    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.headerBox]}>
          <Text style={[styles.headerTitle]}>VERIFY DETAILS</Text>
          <Text
            style={[styles.headerMessage]}>{`OTP sent to ${mobileNo}`}</Text>
        </View>
        <View style={[styles.mainBody]}>
          <Text style={[styles.enterOTPText]}>ENTER OTP</Text>
          <View style={[styles.OTP]}>
            {inputRefs.map((k, idx) => {
              return (
                <TextInput
                  // onKeyPress={({ nativeEvent }) => {
                  //   nativeEvent.key === 'Backspace' ? //do action : //other action
                  // }}
                  value={currOTP[idx]}
                  key={idx}
                  ref={r => (inputRefs[idx] = r)}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={[styles.eachOTPDigit, {borderBottomColor: 'grey'}]}
                  onChangeText={value => {
                    if (value) {
                      idx == 5
                        ? inputRefs[idx].blur()
                        : inputRefs[(idx + 1) % 6].focus();
                    } else {
                      idx == 0
                        ? inputRefs[idx].focus()
                        : inputRefs[(idx + 5) % 6].focus();
                    }
                    let curr = [...currOTP];
                    curr[idx] = value;
                    this.setState({currOTP: curr});
                  }}
                />
              );
            })}
          </View>

          <TouchableOpacity>
            <Text style={[styles.verifyViaCall]}>VERIFY VIA CALL</Text>
          </TouchableOpacity>

          {this.countOTP(currOTP) ? (
            <Button
              title="SUBMIT OTP"
              onPress={() => this.props.initLogin({email, password})}
            />
          ) : (
            <View style={[styles.buttonStyleCopyWrap]}>
              <Text style={[styles.buttonStyleCopy]}>ENTER OTP</Text>
              <View style={[styles.overlay]} />
            </View>
          )}
        </View>

        <Header position="absolute" navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {initLogin})(VerifyOTP);
