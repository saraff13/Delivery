import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {initLogin} from '../store/actions/loginAction';
import Button from '../components/Button';
import styles from '../styles/LoginStyle';

class Login extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  render() {
    const {email, password} = this.state;
    const {success} = this.props;

    return (
      <SafeAreaView style={[styles.main]}>
        <Image
          source={require('../assests/images/swiggyTagline.png')}
          style={[styles.tagLine]}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Enter your email"
          value={email}
          onChangeText={value => this.setState({email: value})}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={value => this.setState({password: value})}
        />
        <Button
          title="Login"
          onPress={() => this.props.initLogin(this.state)}
          // onPress = {() => console.log(this.state)}
        />
      </SafeAreaView>
    );
  }
}

// export default Login;

const mapStateToProps = state => ({
  success: state.registerReducer.success,
});

export default connect(mapStateToProps, {initLogin})(Login);
