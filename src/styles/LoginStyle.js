import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  tagLine: {
    // borderWidth: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(70),
    position: 'absolute',
  },
  detailBox: {
    paddingHorizontal: 15,
    backgroundColor: Colors.WHITE,
    marginTop: responsiveHeight(42),
    paddingTop: responsiveHeight(5),
  },
  tabName: {
    fontSize: 20,
    fontWeight: '700',
  },
  tabFunction: {
    color: 'dimgrey',
    marginBottom: responsiveHeight(2.5),
  },
  offersNavigator: {
    marginTop: responsiveHeight(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(11),
    borderTopWidth: 2,
  },
  feedbackNavigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(11),
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  iconAndDetailWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: responsiveWidth(5),
    fontSize: 22,
  },
  touchableTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  version: {
    fontSize: 13,
    color: 'dimgrey',
  },
});

export default styles;
