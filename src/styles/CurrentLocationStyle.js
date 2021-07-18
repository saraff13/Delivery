import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    height: responsiveHeight(100),
    backgroundColor: Colors.WHITE,
    // borderWidth: 1,
  },

  getLocation: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    margin: 20,
    borderBottomWidth: 0.75,
    padding: 10,
    borderBottomColor: 'dimgrey',
  },
  gpsText: {
    fontSize: 18,
    paddingLeft: 10,
    color: Colors.BLUE,
  },
  gpsIcon: {
    fontSize: 25,
    color: Colors.BLUE,
  },

  savedAddresses: {
    marginTop: 15,
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
  },
  headerTitle: {
    fontSize: 15,
    paddingLeft: 50,
    paddingVertical: 30,
    color: 'dimgrey',
  },

  eachAddress: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    color: 'dimgrey',
    paddingBottom: 15,
  },
  addressBox: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'dimgrey',
    width: responsiveWidth(100),
    paddingBottom: 15,
  },
  addressType: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  address: {
    color: 'dimgrey',
  },

  empty: {
    textAlign: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'dimgrey',
    paddingBottom: 15,
  },

  poweredByGoogle: {
    marginTop: 30,
    textAlign: 'center',
  },
});

export default styles;
