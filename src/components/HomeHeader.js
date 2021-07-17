import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveWidth, responsiveHeight} from '../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class HomeHeader extends Component {
  render() {
    const {title = '', navigation} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <TouchableOpacity
          style={[styles.leftHeaderBox]}
          onPress={() => navigation.navigate('CurrentLocation')}>
          <View style={[styles.addressType]}>
            <Icon
              name="map-marker-outline"
              size={23}
              style={[styles.locationIcon]}
            />
            <Text style={[styles.addressTypeTitle]}>{title}</Text>
          </View>
          <Text numberOfLines={1} style={[styles.address]}>
            MW.019.0402, Indu Devi Lane, Brahampura, Muzaffarpur, Bihar
          </Text>
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
      </SafeAreaView>
    );
  }
}

export default HomeHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    height: responsiveHeight(10),
  },

  leftHeaderBox: {
    // borderWidth: 1,
    width: responsiveWidth(70),
    paddingLeft: 5,
    paddingRight: 5,
  },
  addressType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    color: Colors.BLACK,
  },
  addressTypeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  address: {
    paddingLeft: 5,
  },

  rightHeaderBox: {
    width: responsiveWidth(25),
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 5,
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
