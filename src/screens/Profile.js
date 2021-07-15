import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {initLogout} from '../store/actions/logoutAction';
import styles from '../styles/ProfileStyle';

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>My Profile</Text>
        <Button title="Logout" onPress={() => this.props.initLogout()} />
      </SafeAreaView>
    );
  }
}

// export default Profile;

export default connect(null, {initLogout})(Profile);
