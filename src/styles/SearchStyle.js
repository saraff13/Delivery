import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },

  searchBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
    marginHorizontal: 15,
    marginTop: responsiveHeight(4),
    width: responsiveWidth(90),
  },
  searchInput: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },

  recentSearches: {
    // borderWidth: 1,
    width: responsiveWidth(90),
    paddingVertical: 20,
  },
  recentSearchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    marginBottom: responsiveHeight(1),
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerShowMore: {},
  headerShowMoreText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.ORANGE,
  },
  recentlySearchedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: responsiveWidth(3),
    color: 'dimgrey',
    paddingVertical: responsiveHeight(2.5),
  },
  recentlySearchedText: {
    fontSize: 16,
    color: 'dimgrey',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingVertical: responsiveHeight(2.5),
    width: responsiveWidth(82),
  },

  popularCuisines: {
    // borderWidth: 1,
    height: responsiveHeight(24),
    marginBottom: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    marginHorizontal: 15,
  },
  popularCuisinesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: responsiveHeight(3),
  },

  seperators: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    height: 10,
    width: responsiveWidth(100),
  },
});

export default styles;
