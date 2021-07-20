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
  mapContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  map: {
    flex: 1,
  },
});

export default styles;
