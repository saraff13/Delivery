import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;
class Header extends Component {
  render() {
    const {title = 'Header', navigation, showBellIcon} = this.props;
    return (
      <View style={[styles.main]}>
        <TouchableOpacity
          style={[styles.iconLeft]}
          // onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>

        <Text style={[styles.headerTitle]}>{title}</Text>

        {showBellIcon ? (
          <TouchableOpacity
            style={[styles.iconRight]}
            onPress={() => this.props.navigation.navigate('Offers')}>
            <Icon name="bell" size={25} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={[styles.empty]} />
        )}
      </View>
    );
  }
}

export default connect(null)(Header);

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'darkcyan',
    height: responsiveHeight(8),
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  leftIcon: {},
  rightIcon: {},
  empty: {width: 30},
});
