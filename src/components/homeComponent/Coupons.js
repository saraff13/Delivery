import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getRestaurants} from '../../store/actions/restaurantsAction';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

class Coupons extends Component {
  componentDidMount() {
    this.fetchData(false);
  }
  fetchData = (isPaginated = true) => {
    const {getRestaurants, couponsData} = this.props;
    if (!isPaginated) {
      getRestaurants({data: [], pageNo: 1});
      return;
    }
    const data = (couponsData && couponsData.data) || [];
    const currPageNo = (couponsData && couponsData.page) || 0;
    const pageNo = currPageNo + 1;
    if (pageNo <= couponsData.total_pages) getRestaurants({data, pageNo});
  };
  render() {
    const {couponsData} = this.props;
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={(couponsData && couponsData.data) || []}
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
    couponImage = avatar,
  } = item.item;
  return (
    <View style={[styles.eachCoupon]}>
      <Image source={{uri: couponImage}} style={[styles.couponImage]} />
    </View>
  );
};

const mapStateToProps = state => ({
  couponsData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(Coupons);

const styles = StyleSheet.create({
  eachCoupon: {
    marginRight: responsiveWidth(6),
    // borderWidth: 1,
  },
  couponImage: {
    width: responsiveHeight(14),
    height: responsiveHeight(18),
  },
});
