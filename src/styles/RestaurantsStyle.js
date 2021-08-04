import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    paddingBottom: 0,
  },
  headerImageScroll: {
    backgroundColor: Colors.WHITE,
  },
  headerImage: {
    width: responsiveWidth(60),
    height: responsiveWidth(60),
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 5,
  },
  headerScrollIcons: {
    marginTop: 30,
  },
  Features: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 12,
    width: responsiveWidth(17),
    height: responsiveWidth(15),
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  headerIcons: {
    color: Colors.ORANGE,
    fontSize: 23,
  },
  iconText: {
    fontSize: 12,
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    paddingBottom: 0,
  },
  headerTitle: {
    fontSize: 15,
  },
  sortFilter: {},

  eachRestaurant: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    height: responsiveHeight(28),
    // borderWidth: 1,
  },

  restaurantProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveWidth(6),
    marginRight: responsiveWidth(2),
  },
  restaurantImage: {
    // borderWidth: 1,
    width: responsiveWidth(23),
    height: responsiveWidth(30),
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    height: responsiveWidth(33),
    marginVertical: 7,
  },
  maxDiscount: {
    backgroundColor: Colors.ORANGE,
    color: Colors.WHITE,
    padding: 7,
    paddingVertical: 0,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 17,
    width: responsiveWidth(20),
    position: 'absolute',
    alignSelf: 'flex-end',
  },

  restaurantDetails: {
    // borderWidth: 1,
    justifyContent: 'center',
    width: responsiveWidth(65),
    marginVertical: responsiveWidth(6.5),
    padding: 5,
  },
  restaurantDetailsHeader: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  bestSafety: {
    fontWeight: 'bold',
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 1,
  },

  restaurantType: {
    // borderWidth: 1,
    padding: 2,
    color: 'grey',
  },

  restaurantLocation: {
    // borderWidth: 1,
    padding: 2,
    color: 'grey',
  },

  restaurantReview: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    flexDirection: 'row',
    padding: 2,
    marginBottom: 4,
    paddingBottom: 10,
  },
  rating: {
    fontWeight: 'bold',
    color: 'dimgrey',
  },

  availableCoupon: {
    // borderWidth: 1,
    padding: 2,
  },

  footerImage: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
  },
});

export default styles;
