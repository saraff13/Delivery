import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux';
import {responsiveWidth, responsiveHeight} from '../utils/Responsive';
import {hideToast} from '../store/actions/toastAction';
import * as TOAST_TYPE from '../utils/toastTypes';
import * as Colors from '../utils/Colors';

class Toast extends Component {
  render() {
    const {showing, message, type, hideToast} = this.props;

    if (!showing) return null;

    setTimeout(() => {
      hideToast();
    }, 3000);

    let bgColor = Colors.GREY;
    if (type === TOAST_TYPE.SUCCESS) bgColor = Colors.ORANGE;
    if (type === TOAST_TYPE.FAIL) bgColor = Colors.RED;

    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.toastBox, {backgroundColor: bgColor}]}>
          <Text style={[styles.toastMessage]}>{message}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  showing: state.toastReducer.showing,
  message: state.toastReducer.message,
  type: state.toastReducer.type,
});

export default connect(mapStateToProps, {hideToast})(Toast);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    top: 0,
    left: 0,
    position: 'absolute',
    width: responsiveWidth(100),
  },
  toastBox: {
    padding: 15,
  },
  toastMessage: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 18,
  },
});
