import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveWidth} from '../utils/Responsive';

const {w} = Dimensions.get('screen');

class Button extends Component {
  render() {
    const {title, onPress = () => {}} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.main]}>
        <Text style={[styles.ButtonText]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ORANGE,
    width: responsiveWidth(75),
    borderRadius: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
  ButtonText: {
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
