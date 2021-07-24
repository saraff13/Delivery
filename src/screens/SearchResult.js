import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

export default class Item extends Component {
  render() {
    const {listItem} = this.props;
    return (
      <View style={[styles.container]}>
        <Image
          style={[styles.itemImage]}
          source={require('../assests/images/SwiggyLogo.jpg')}
        />
        <View style={[styles.textBox]}>
          <Text style={[styles.itemName]}>{listItem.name}</Text>
          <Text style={[styles.itemType]}>{listItem.type}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    height: responsiveHeight(9.5),
    marginBottom: responsiveHeight(4),
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    height: responsiveHeight(9.5),
    width: responsiveHeight(9.5),
    marginRight: 15,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
  textBox: {
    // borderWidth: 1,
  },
  itemName: {
    fontSize: 18,
  },

  itemType: {
    fontSize: 16,
    color: 'dimgrey',
  },
});
