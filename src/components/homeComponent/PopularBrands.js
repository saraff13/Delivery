import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Colors from '../../utils/Colors';
import {connect} from 'react-redux';
import {getRestaurants} from '../../store/actions/restaurantsAction';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

class PopularBrands extends Component {
  componentDidMount() {
    this.fetchData(false);
  }
  fetchData = (isPaginated = true) => {
    const {getRestaurants, brandsData} = this.props;
    if (!isPaginated) {
      getRestaurants({data: [], pageNo: 1});
      return;
    }
    const data = (brandsData && brandsData.data) || [];
    const currPageNo = (brandsData && brandsData.page) || 0;
    const pageNo = currPageNo + 1;
    if (pageNo <= brandsData.total_pages) getRestaurants({data, pageNo});
  };
  render() {
    const {brandsData} = this.props;
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={(brandsData && brandsData.data) || []}
        renderItem={renderItem}
        onEndReached={() => this.fetchData()}
      />
    );
  }
}

const renderItem = item => {
  const {
    // getting from reqres api
    avatar,
    email,
    first_name,
    last_name,
    id,

    // for real api
    brandImage = avatar,
    brandName = `${first_name} ${last_name} Restaurant`,
    timeMinutes = '34 mins',
  } = item.item;
  return (
    <TouchableOpacity style={[styles.eachBrand]}>
      <View style={[styles.brandImageWrap]}>
        <Image source={{uri: brandImage}} style={[styles.brandImage]} />
      </View>

      <Text numberOfLines={2} style={[styles.brandName]}>
        {brandName}
      </Text>
      <Text style={[styles.willTakeTime]}>{timeMinutes}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  brandsData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(PopularBrands);

const styles = StyleSheet.create({
  eachBrand: {
    height: responsiveHeight(22.5),
    width: responsiveHeight(13),
    marginRight: responsiveWidth(6),
    // borderWidth: 1,
  },
  brandImageWrap: {
    width: responsiveHeight(12.5),
    height: responsiveHeight(12.5),
    borderWidth: 0.5,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  brandImage: {
    width: responsiveHeight(12),
    height: responsiveHeight(12),
    borderRadius: 100,
    borderWidth: responsiveHeight(0.75),
    borderColor: Colors.WHITE,
  },
  brandName: {
    marginTop: responsiveHeight(1.5),
    width: responsiveHeight(13),
    fontWeight: 'bold',
    // borderWidth: 1,
    textAlign: 'center',
  },
  willTakeTime: {
    width: responsiveHeight(13),
    textAlign: 'center',
    marginTop: 2,
    color: 'dimgrey',
  },
});
