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
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Login extends Component {
  state = {
    mobileNo: '',
  };
  login() {
    this.RBSheet.close();
    this.props.navigation.navigate('VerifyOTP', {
      mobileNo: this.state.mobileNo,
    });
  }
  render() {
    const {mobileNo} = this.state;

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
          <Button title="LOGIN" onPress={() => this.RBSheet.open()} />
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

        <RBSheet
          ref={ref => (this.RBSheet = ref)}
          closeOnDragDown={true}
          height={450}
          openDuration={250}
          customStyles={{container: styles.RBSheet}}>
          <Text style={[styles.RBSheetLoginText]}>LOGIN</Text>
          <Text style={[styles.RBSheetInfoText]}>
            Enter your phone number to proceed
          </Text>

          <View style={[styles.mobileNoBox]}>
            <Text style={[styles.infoText]}>10 digit mobile number</Text>
            <View style={[styles.mobileNoWithCode]}>
              <Text style={[styles.countryCode]}>+91</Text>
              <TextInput
                value={mobileNo}
                style={[styles.mobileNo]}
                onChangeText={mobileNo => this.setState({mobileNo})}
              />
            </View>
          </View>

          {mobileNo.length == 10 ? (
            <Button title={'LOGIN'} onPress={() => this.login()} />
          ) : (
            <View style={[styles.buttonStyleCopyWrap]}>
              <Text style={[styles.buttonStyleCopy]}>ENTER PHONE NUMBER</Text>
              <View style={[styles.overlay]} />
            </View>
          )}
        </RBSheet>
      </SafeAreaView>
    );
  }
}

export default connect(null, {initLogin})(Login);
