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
    padding: 13,
  },
  ButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
