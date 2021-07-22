import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Colors from '../../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

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
    backgroundColor: 'tomato',
    width: responsiveWidth(85),
    borderRadius: 2,
    padding: 15,
    marginVertical: responsiveHeight(1),
  },
  ButtonText: {
    fontSize: 25,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
