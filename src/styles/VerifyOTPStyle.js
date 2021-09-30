import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerBox: {
    height: responsiveHeight(20),
    backgroundColor: 'aliceblue',
    paddingHorizontal: 15,
  },
  headerTitle: {
    marginTop: responsiveHeight(9),
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerMessage: {
    color: 'dimgrey',
    marginTop: 5,
  },

  mainBody: {
    marginHorizontal: 15,
    marginTop: responsiveHeight(7),
  },
  enterOTPText: {
    fontSize: 12,
    color: 'dimgrey',
  },
  OTP: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(5),
    marginTop: responsiveHeight(2),
  },
  eachOTPDigit: {
    borderBottomWidth: 2,
    width: responsiveWidth(12),
    textAlign: 'center',
    fontSize: 17,
  },
  verifyViaCall: {
    marginVertical: responsiveHeight(2),
    alignSelf: 'flex-end',
    fontSize: 14,
    color: 'dimgrey',
  },

  buttonStyleCopyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ORANGE,
    padding: 13,
  },
  buttonStyleCopy: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.WHITE,
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
});

export default styles;
