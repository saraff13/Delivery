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

class TopPicks extends Component {
  componentDidMount() {
    this.fetchData(false);
  }
  fetchData = (isPaginated = true) => {
    const {getRestaurants, restaurantsData} = this.props;
    if (!isPaginated) {
      getRestaurants({data: [], pageNo: 1});
      return;
    }
    const data = (restaurantsData && restaurantsData.data) || [];
    const currPageNo = (restaurantsData && restaurantsData.page) || 0;
    const pageNo = currPageNo + 1;
    if (pageNo <= restaurantsData.total_pages) getRestaurants({data, pageNo});
  };
  render() {
    const {restaurantsData, navigation} = this.props;
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={(restaurantsData && restaurantsData.data) || []}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantDetails', {item})}>
              <RenderItem item={item} />
            </TouchableOpacity>
          );
        }}
        onEndReached={() => this.fetchData()}
      />
    );
  }
}

const RenderItem = item => {
  const {
    // getting from reqres api
    avatar,
    email,
    first_name,
    last_name,
    id,

    // for real api
    restaurantImage = avatar,
    restaurantName = `${first_name} ${last_name} Restaurant`,
    timeMinutes = '34 mins',
    maxDiscount = '50% OFF',
  } = item.item;
  return (
    <View style={[styles.eachRestaurant]}>
      <Image source={{uri: restaurantImage}} style={[styles.restaurantImage]} />
      <Text numberOfLines={2} style={[styles.restaurantName]}>
        {restaurantName}
      </Text>
      <Text style={[styles.willTakeTime]}>{timeMinutes}</Text>
      <Text style={[styles.maxDiscount]}>{maxDiscount}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  restaurantsData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(TopPicks);

const styles = StyleSheet.create({
  eachRestaurant: {
    height: responsiveHeight(21),
    width: responsiveHeight(12),
    marginRight: responsiveWidth(5),
    // borderWidth: 1,
  },
  restaurantImage: {
    width: responsiveHeight(12),
    height: responsiveHeight(12),
    borderRadius: 5,
  },
  maxDiscount: {
    position: 'absolute',
    backgroundColor: Colors.ORANGE,
    color: Colors.WHITE,
    fontWeight: 'bold',
    width: responsiveHeight(10),
    textAlign: 'center',
    marginTop: responsiveHeight(10),
    marginLeft: responsiveHeight(1),
    borderRadius: 5,
  },
  restaurantName: {
    width: responsiveHeight(11),
    fontWeight: 'bold',
    marginTop: 5,
  },
  willTakeTime: {
    marginTop: 2,
    color: 'dimgrey',
  },
});
