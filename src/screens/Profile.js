import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {initLogout} from '../store/actions/logoutAction';
import styles from '../styles/ProfileStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PastOrder from '../components/ProfileComponent/PastOrder';

const Icon = MaterialCommunityIcons;

class Profile extends Component {
  state = {
    show: false,
  };
  render() {
    const {user} = this.props;
    const {
      name = 'sumit saraff',
      mobile = '9734324568',
      email = 'sgwrgfdd@gmail.com',
    } = this.props;
    const {show} = this.state;
    return (
      <>
        <ScrollView
          onScroll={e => {
            if (e.nativeEvent.contentOffset.y <= 75) {
              if (show === true) this.setState({show: false});
            } else {
              if (show === false) this.setState({show: true});
            }
          }}
          style={[styles.main]}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.eachComponentBox, {borderBottomWidth: 2}]}>
            <View style={[styles.nameBox]}>
              <Text style={[styles.name]}>{`${name}`.toUpperCase()}</Text>
              <TouchableOpacity>
                <Text style={[styles.edit]}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.detailBox]}>
              <Text style={[styles.mobileNo]}>{mobile}</Text>
              <Text style={[styles.dot]} />
              <Text style={[styles.emailID]}>{email}</Text>
            </View>
          </View>

          <View style={[styles.eachComponentBox]}></View>

          <View style={[styles.eachComponentBox]}></View>

          <View style={[styles.eachComponentBox]}></View>

          <View
            style={[styles.eachComponentBox, {borderBottomWidth: 0}]}></View>

          <View style={[styles.seperator]}>
            <Text style={[styles.seperatorTitle]}>PAST ORDERS</Text>
          </View>

          <View style={[styles.pastOrders]}>
            <PastOrder />
          </View>

          <View style={[styles.seperator, {height: 25}]}></View>

          <TouchableOpacity
            style={[styles.logoutButtonBox]}
            onPress={() => this.props.initLogout()}>
            <Text style={[styles.logoutText]}>LOGOUT</Text>
            <Icon name="power" style={[styles.logoutIcon]} />
          </TouchableOpacity>

          <View style={[styles.footer]}>
            <Text style={[styles.footerTitle]}>App version 3.49.2(926)</Text>
          </View>
        </ScrollView>
        {show && (
          <View style={[styles.header]}>
            <Text style={[styles.headerTitle]}>MY ACCOUNT</Text>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {initLogout})(Profile);
