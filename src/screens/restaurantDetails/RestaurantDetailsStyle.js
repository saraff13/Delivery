import {StyleSheet} from 'react-native';
import * as Colors from '../../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.WHITE,
  },

  restaurantDetails: {
    padding: 15,
    // borderWidth: 1,
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1),
  },
  restaurantType: {
    fontSize: 15,
    // borderWidth: 1,
    color: 'grey',
    marginBottom: 3,
  },
  restaurantLocation: {
    fontSize: 15,
    // borderWidth: 1,
    color: 'grey',
  },
  restaurantReviewBox: {
    marginVertical: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 0.6,
    borderColor: Colors.BLACK,
  },
  restaurantReviews: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  reviewDetails: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  review: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  reviewType: {
    color: 'dimgrey',
  },
  bestSafetyBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    height: responsiveHeight(7),
    paddingHorizontal: 5,
    marginTop: 15,
    backgroundColor: 'mintcream',
  },
  bestSafetyDetail: {
    // borderWidth: 1,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: 'darkcyan',
  },
  bestSafetyIcon: {
    color: Colors.ORANGE,
  },
  eachCouponBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    marginRight: 15,
    paddingLeft: 15,
    paddingBottom: 12,
    paddingTop: 10,
    width: responsiveWidth(55),
  },
  offerIcon: {
    color: Colors.ORANGE,
    fontSize: 18,
  },
  couponFeature: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  couponDetails: {
    fontSize: 12,
    color: 'dimgrey',
  },
  couponScrollBar: {
    borderWidth: 2,
    width: responsiveWidth(25),
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
    borderColor: Colors.ORANGE,
    borderRadius: 5,
  },

  seperators: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: 20,
    width: responsiveWidth(100),
    marginTop: responsiveHeight(3),
  },
  specialSeperator: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: 10,
    width: responsiveWidth(100),
  },

  VegBox: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(13),
  },
  switch: {
    // transform: [{scaleX: 1}, {scaleY: 1}],
    marginRight: 10,
    // borderWidth: 1,
  },
  vegToggle: {
    flexDirection: 'row',
    // borderWidth: 1,
  },
  VegText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'dimgrey',
    // borderWidth: 1,
    textAlignVertical: 'center',
  },
  bestSafetyWrap: {
    flexDirection: 'row',
    marginRight: 15,
  },
  bestSafetyText: {
    fontWeight: 'bold',
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    textAlignVertical: 'center',
    height: responsiveHeight(2.5),
    marginLeft: 2,
  },

  recommended: {
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  recommendedText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
