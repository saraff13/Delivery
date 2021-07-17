import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.WHITE,
  },
  tagLine: {
    // borderWidth: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(65),
  },
  lastButton: {
    alignItems: 'center',
  },
});

export default styles;
