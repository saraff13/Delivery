import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Colors from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;
class Header extends Component {
  render() {
    const {
      title = '',
      navigation,
      showRestaurantHeader,
      showOnlyBackIcon,
    } = this.props;
    return (
      <View style={[styles.main]}>
        {showOnlyBackIcon ? (
          <TouchableOpacity
            style={[styles.iconLeft]}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color="black" />
            <Text style={[styles.headerTitle]}>{title}</Text>
          </TouchableOpacity>
        ) : (
          <>
            {showRestaurantHeader ? (
              <View style={[styles.restaurantHeader]}>
                <TouchableOpacity
                  style={[styles.backIcon]}
                  onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" size={25} color="black" />
                </TouchableOpacity>
                <View style={[styles.rightIcons]}>
                  <TouchableOpacity
                    style={[styles.heartIcon]}
                    // onPress={() => this.props.navigation.navigate('Offers')}
                  >
                    <Icon name="heart-outline" size={25} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.searchIcon]}
                    // onPress={() => this.props.navigation.navigate('Offers')}
                  >
                    <Icon name="magnify" size={25} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={[styles.restaurantsListHeader]}>
                <TouchableOpacity
                  style={[styles.backToHome]}
                  onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" size={30} color="black" />
                  <Text style={[styles.headerTitle]}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.rightHeaderBox]}
                  onPress={() => navigation.navigate('Offers')}>
                  <Icon
                    name="brightness-percent"
                    size={30}
                    style={[styles.offersIcon]}
                  />
                  <Text style={[styles.offersText]}>Offers</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </View>
    );
  }
}

export default connect(null)(Header);

const styles = StyleSheet.create({
  main: {
    height: responsiveHeight(9),
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },

  iconLeft: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },

  restaurantHeader: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  backIcon: {},
  rightIcons: {
    flexDirection: 'row',
    width: responsiveWidth(20),
    justifyContent: 'space-between',
  },
  searchIcon: {},
  heartIcon: {},

  restaurantsListHeader: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  backToHome: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  rightHeaderBox: {
    width: responsiveWidth(25),
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  offersText: {
    fontSize: 20,
    fontWeight: 'bold',
    // borderWidth: 1,
  },
  offersIcon: {
    color: 'black',
    // borderWidth: 1,
  },
});
