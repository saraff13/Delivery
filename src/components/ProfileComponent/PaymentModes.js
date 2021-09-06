import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import Header from '../Header';
import * as Colors from '../../utils/Colors';

class PaymentModes extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} title="PAYMENTS" />

        <Text style={[styles.headerTitle]}>WALLET</Text>
        <View style={[styles.allPaymentsBox]}>
          <View style={[styles.eachPaymentMethod]}>
            <View style={[styles.imageTextWrap]}>
              <Image
                style={[styles.image]}
                source={require('../../assests/images/swiggy0.jpg')}
              />
              <Text style={[styles.PaymentAppText]}>Freecharge</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkAccount]}>LINK ACCOUNT</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.eachPaymentMethod]}>
            <View style={[styles.imageTextWrap]}>
              <Image
                style={[styles.image]}
                source={require('../../assests/images/swiggy5.jpg')}
              />
              <Text style={[styles.PaymentAppText]}>Mobikwik</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkAccount]}>LINK ACCOUNT</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.eachPaymentMethod]}>
            <View style={[styles.imageTextWrap]}>
              <Image
                style={[styles.image]}
                source={require('../../assests/images/swiggy1.jpg')}
              />
              <Text style={[styles.PaymentAppText]}>Paytm</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkAccount]}>LINK ACCOUNT</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.eachPaymentMethod]}>
            <View style={[styles.imageTextWrap]}>
              <Image
                style={[styles.image]}
                source={require('../../assests/images/swiggy2.jpg')}
              />
              <Text style={[styles.PaymentAppText]}>Phonepe</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkAccount]}>LINK ACCOUNT</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.eachPaymentMethod, {borderBottomWidth: 0}]}>
            <View style={[styles.imageTextWrap]}>
              <Image
                style={[styles.image]}
                source={require('../../assests/images/swiggy5.jpg')}
              />
              <Text style={[styles.PaymentAppText]}>Amazon Pay</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkAccount]}>LINK ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default connect(null)(PaymentModes);

const styles = StyleSheet.create({
  main: {},
  headerTitle: {
    fontSize: 12,
    marginHorizontal: 15,
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(2),
  },
  allPaymentsBox: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 15,
  },
  eachPaymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveWidth(16),
    borderBottomWidth: 0.5,
  },
  imageTextWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    marginRight: responsiveWidth(5),
  },
  PaymentAppText: {
    fontSize: 15,
  },
  linkAccount: {
    color: Colors.ORANGE,
    fontWeight: '700',
  },
});
