import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: responsiveHeight(9),
    paddingHorizontal: 15,
    backgroundColor: Colors.WHITE,
    width: responsiveWidth(100),
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  eachComponentBox: {
    height: responsiveHeight(13),
    justifyContent: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 0.5,
  },

  pastOrders: {
    marginHorizontal: 15,
  },

  nameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  edit: {
    color: 'orange',
    fontSize: 14,
  },
  detailBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileNo: {
    color: 'dimgrey',
    fontSize: 14,
  },
  dot: {
    marginHorizontal: 10,
    color: 'dimgrey',
    borderWidth: 1,
    width: 1,
    height: 1,
    borderRadius: 50,
  },
  emailID: {
    color: 'dimgrey',
    fontSize: 14,
  },

  seperator: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  seperatorTitle: {
    fontSize: 13,
    color: 'dimgrey',
  },

  logoutButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    height: responsiveHeight(8),
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '700',
  },
  logoutIcon: {
    fontSize: 25,
  },

  footer: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: responsiveHeight(20),
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingTop: responsiveHeight(3),
  },
  footerTitle: {
    fontSize: 13,
    color: 'dimgrey',
  },
});

export default styles;
