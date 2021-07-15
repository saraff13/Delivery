import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  tagLine: {
    // borderWidth: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  input: {
    borderWidth: 1,
    width: responsiveWidth(75),
    height: responsiveHeight(8),
    fontSize: 25,
    marginTop: responsiveWidth(4),
    borderRadius: 5,
    padding: 10,
    backgroundColor: Colors.WHITE,
  },
  msgText: {
    fontSize: 15,
    marginTop: responsiveHeight(1),
  },
});

export default styles;
