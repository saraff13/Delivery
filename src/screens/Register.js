import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import styles from '../styles/RegisterStyle';
import {initRegistration} from '../store/actions/registerAction';
import Login from './Login';

class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    mobile: '',
  };
  render() {
    const {email, password, name, mobile} = this.state;
    const {success} = this.props;
    // console.log(email,' ',password,' ',success);

    if (success) {
      return <Login />;
    }

    return (
      <SafeAreaView style={[styles.main]}>
        <Text style={[styles.infoText]}>Enter your details</Text>
        <View style={[styles.eachInput]}>
          <Text style={[styles.inputType]}>Name: </Text>
          <TextInput
            style={[styles.getInput]}
            placeholder="Enter your Name"
            value={name}
            onChangeText={value => this.setState({name: value})}
          />
        </View>
        <View style={[styles.eachInput]}>
          <Text style={[styles.inputType]}>Mobile: </Text>
          <TextInput
            style={[styles.getInput]}
            placeholder="Enter your Mobile No."
            value={mobile}
            onChangeText={value => this.setState({mobile: value})}
          />
        </View>
        <View style={[styles.eachInput]}>
          <Text style={[styles.inputType]}>Email: </Text>
          <TextInput
            style={[styles.getInput]}
            placeholder="Enter your Email"
            value={email}
            onChangeText={value => this.setState({email: value})}
          />
        </View>
        <View style={[styles.eachInput]}>
          <Text style={[styles.inputType]}>Password: </Text>
          <TextInput
            style={[styles.getInput]}
            placeholder="Enter your Password"
            secureTextEntry
            value={password}
            onChangeText={value => this.setState({password: value})}
          />
        </View>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('VerifyOTP')}
        />

        <Text style={[styles.msgText]}>Already have an account</Text>
        <Button
          title="Login here"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </SafeAreaView>
    );
  }
}

// export default Register;

const mapStateToProps = state => ({
  success: state.registerReducer.success,
});

export default connect(mapStateToProps, {initRegistration})(Register);
