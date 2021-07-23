import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.WHITE,
  },

  noContactWrap: {
    // borderWidth: 1,
    backgroundColor: 'tomato',
    height: responsiveHeight(18),
    borderRadius: 10,
    marginBottom: responsiveHeight(5),
    marginHorizontal: 15,
    marginTop: 5,
  },
  noContactBox: {
    // borderWidth: 1,
    height: responsiveHeight(12.5),
    paddingLeft: 15,
    paddingTop: 15,
  },
  restaurantsText: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
  },
  noContactText: {
    color: Colors.WHITE,
  },
  viewAllText: {
    color: Colors.WHITE,
    // borderWidth: 1,
    backgroundColor: '#FF3333',
    height: responsiveHeight(5.5),
    fontSize: 17,
    paddingLeft: 15,
    paddingTop: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  viewAllIcon: {
    fontSize: 17,
  },
  noContactImage: {
    position: 'absolute',
    height: responsiveHeight(18),
    width: responsiveHeight(18),
    borderRadius: 100,
    alignSelf: 'flex-end',
  },

  topPicks: {
    // borderWidth: 1,
    height: responsiveHeight(28),
    marginBottom: responsiveHeight(5),
    marginHorizontal: 15,
  },
  topPicksText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: responsiveHeight(3),
  },
  topPicksIcon: {
    fontSize: 20,
    color: Colors.ORANGE,
  },

  imageSlider: {
    marginBottom: responsiveHeight(5),
    marginHorizontal: 15,
  },

  couponsForYou: {
    // borderWidth: 1,
    height: responsiveHeight(30),
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  couponsForYouText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: responsiveHeight(3),
  },

  seperators: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: 10,
    width: responsiveWidth(100),
  },
  specialSeperator: {
    marginTop: responsiveHeight(4),
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: 10,
    width: responsiveWidth(100),
  },

  popularCuisines: {
    // borderWidth: 1,
    height: responsiveHeight(24),
    marginBottom: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  popularCuisinesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: responsiveHeight(3),
  },

  popularBrands: {
    // borderWidth: 1,
    height: responsiveHeight(33),
    marginBottom: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  popularBrandsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  popularBrandsDetail: {
    fontSize: 16,
    color: 'dimgrey',
    marginBottom: responsiveHeight(3),
  },

  spotlight: {
    // borderWidth: 1,
    height: responsiveHeight(58),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  spotlightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spotlightText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spotlightIcon: {
    fontSize: 20,
    color: Colors.ORANGE,
  },
  seeAllBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllIcon: {
    fontSize: 20,
    color: Colors.WHITE,
    backgroundColor: Colors.ORANGE,
    width: 20,
    height: 20,
    // borderWidth: 1,
    borderRadius: 50,
  },
  spotlightDetail: {
    fontSize: 16,
    color: 'dimgrey',
    marginBottom: responsiveHeight(3),
  },

  freeDelivery: {
    // borderWidth: 1,
    height: responsiveHeight(58),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  freeDeliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  freeDeliveryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  freeDeliveryIcon: {
    fontSize: 20,
    color: Colors.ORANGE,
  },
  freeDeliveryDetail: {
    fontSize: 16,
    color: 'dimgrey',
    marginBottom: responsiveHeight(3),
  },

  expressDelivery: {
    // borderWidth: 1,
    height: responsiveHeight(60),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  expresseDeliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expressDeliveryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  expressDeliveryIcon: {
    fontSize: 20,
    color: Colors.ORANGE,
  },
  expressDeliveryDetail: {
    fontSize: 16,
    color: 'dimgrey',
  },
  termsAndConditions: {
    marginBottom: responsiveHeight(3),
    fontSize: 16,
    color: 'dimgrey',
  },

  promotedRestaurants: {
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  promotedRestaurantsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  nearByRestaurants: {
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  nearByRestaurantsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nearByRestaurantsDetail: {
    fontSize: 16,
    color: 'dimgrey',
  },

  button: {
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
  },

  tagLineImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
  },
});

export default styles;
