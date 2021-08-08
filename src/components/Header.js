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
      time = '',
      navigation,
      showRestaurantHeader,
      showOnlyBackIcon,
      position = '',
    } = this.props;
    return (
      <>
        {position ? (
          <View style={[styles.main2, {position: position}]}>
            <TouchableOpacity
              style={[styles.absoluteBackIcon]}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={25} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
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
                    <View style={[styles.backIconTitleWrap]}>
                      <TouchableOpacity
                        style={[styles.backIcon]}
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={25} color="black" />
                      </TouchableOpacity>
                      <View style={[styles.restaurantHeaderBox]}>
                        <Text style={[styles.restaurantHeaderTitle]}>
                          {title}
                        </Text>
                        <Text style={[styles.restaurantHeaderTime]}>
                          {time}
                        </Text>
                      </View>
                    </View>

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
                      <Icon name="arrow-left" size={27} color="black" />
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
        )}
      </>
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

  main2: {
    height: responsiveHeight(9),
    justifyContent: 'center',
  },
  absoluteBackIcon: {
    marginHorizontal: 15,
  },
  iconLeft: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },

  restaurantHeader: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIconTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantHeaderBox: {
    // borderWidth: 1,
  },
  restaurantHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  restaurantHeaderTime: {
    color: 'dimgrey',
  },
  backIcon: {
    marginRight: responsiveWidth(3),
  },
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
