import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    // borderWidth: 1,
  },
  infoText: {
    fontSize: 20,
    marginBottom: responsiveHeight(3),
  },
  eachInput: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: responsiveWidth(80),
    margin: 5,
  },
  inputType: {
    fontSize: 18,
    alignSelf: 'center',
    padding: 10,
    width: responsiveWidth(30),
  },
  getInput: {
    padding: 0,
    fontSize: 18,
    borderBottomWidth: 1,
    width: responsiveWidth(45),
    // backgroundColor: 'lightcyan'
  },
  msgText: {
    fontSize: 15,
    marginTop: responsiveHeight(5),
  },
});

export default styles;
