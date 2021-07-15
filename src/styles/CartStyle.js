import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  emptyCartImage: {
    borderWidth: 1,
    width: responsiveWidth(100),
    height: responsiveWidth(100),
  },
});

export default styles;
