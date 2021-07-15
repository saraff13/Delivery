import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  logo: {
    borderWidth: 1,
    borderRadius: 50,
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    textAlign: 'center',
    margin: responsiveHeight(5),
    paddingVertical: 28,
  },
  input: {
    borderWidth: 1,
    width: responsiveWidth(75),
    height: responsiveHeight(8),
    fontSize: 30,
    margin: responsiveWidth(2),
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default styles;
