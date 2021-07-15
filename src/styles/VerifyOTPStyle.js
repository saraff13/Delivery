import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  inputOTP: {
    borderWidth: 1,
    width: responsiveWidth(75),
    height: responsiveHeight(8),
    fontSize: 25,
    margin: responsiveWidth(2),
    marginTop: responsiveHeight(5),
    borderRadius: 5,
    padding: 10,
    backgroundColor: Colors.WHITE,
  },
  tagLine: {
    // borderWidth: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  redirect: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: responsiveHeight(40),
    width: responsiveWidth(90),
  },
  redirectBox: {},
  redirectLink: {
    fontSize: 18,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: Colors.BLUE,
    marginTop: 15,
  },
});

export default styles;
