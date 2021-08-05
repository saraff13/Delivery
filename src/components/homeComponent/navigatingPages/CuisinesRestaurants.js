import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../../../utils/Colors';
import Header from '../../Header';
import {getRestaurants} from '../../../store/actions/restaurantsAction';
import {responsiveWidth, responsiveHeight} from '../../../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class CuisinesRestaurants extends Component {
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
    // console.log(this.props.route.params.item);
    const {restaurantsData, navigation} = this.props;
    const {
      avatar,
      email,
      first_name,
      last_name,
      id,
      description = 'From cheesy delights to drool worthy toppings, choose from a range of pizzas from around you.',
    } = this.props.route.params.item;
    return (
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={(restaurantsData && restaurantsData.data) || []}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetails', {item})
                }>
                <RenderItem item={item} />
              </TouchableOpacity>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <>
                <Image source={{uri: avatar}} style={[styles.headerImage]} />
                <View style={[styles.headerBottom]}>
                  <Text style={[styles.headerTitle]}>
                    {`${first_name} ${last_name}`.toUpperCase()}
                  </Text>
                  <Text style={[styles.headerDescription]}>{description}</Text>
                  <Text numberOfLines={1}>
                    ............................................................................................................................................................................................................................................................
                  </Text>
                  <View style={[styles.noOfRestaurantsNearByWrap]}>
                    <Text style={[styles.noOfRestaurantsNearBy]}>
                      {(restaurantsData && restaurantsData.total) || 0}{' '}
                      RESTAURANTS NEARBY
                    </Text>
                    <Text style={[styles.sortFilter]}>
                      <Icon name="tune-vertical" size={15} />
                      SORT / FILTER
                    </Text>
                  </View>
                </View>
              </>
            );
          }}
          ListFooterComponent={ListFooter}
          refreshControl={<RefreshControl refreshing={false} />}
          onEndReached={() => this.fetchData()}
          onEndReachedThreshold={0.5}
        />
        <Header
          navigation={this.props.navigation}
          showOnlyBackIcon
          position="absolute"
        />
      </>
    );
  }
}

const RenderItem = item => {
  // console.log(item.item);
  const {
    // getting from reqres api
    avatar,
    email,
    first_name,
    last_name,
    id,

    // for real api
    RestaurantImage = avatar,
    restaurantName = `${first_name} ${last_name}`,
    type = 'North Indian, Chinese, Italian, South Indian, Fast Food',
    address = 'BHU, Lanka, Varanasi',
    distanceKM = '1.2 kms',
    rating = '4.5',
    timeMinutes = '34 mins',
    rupeesForTwo = '500 for two',
    bestSafety = true,
    coupon = 'TRYNEW',
    maxDiscount = '50% OFF',
  } = item.item;
  return (
    <View style={[styles.eachRestaurant]}>
      <View style={[styles.restaurantProfile]}>
        <Image
          source={{uri: RestaurantImage}}
          style={[styles.restaurantImage]}
        />
        <Text style={[styles.maxDiscount]}>{maxDiscount}</Text>
      </View>

      <View style={[styles.restaurantDetails]}>
        {bestSafety ? (
          <View style={[styles.restaurantDetailsHeader]}>
            <Text
              numberOfLines={1}
              style={[styles.restaurantName, {width: responsiveWidth(38)}]}>
              {restaurantName} Restaurant
            </Text>
            <Text style={[styles.bestSafety]}>
              <Icon name="shield-check" color="darkorange" size={15} />
              &nbsp;BEST SAFETY
            </Text>
          </View>
        ) : (
          <Text numberOfLines={1} style={[styles.restaurantName]}>
            {restaurantName} Restaurant
          </Text>
        )}

        <Text numberOfLines={1} style={[styles.restaurantType]}>
          {type}
        </Text>

        <Text style={[styles.restaurantLocation]}>
          {address}, {distanceKM}
        </Text>

        <View style={[styles.restaurantReview]}>
          <Text style={[styles.rating]}>
            <Icon name="star" size={15} />
            &nbsp;{rating} - {timeMinutes} -
            <Icon name="currency-inr" size={13} />
            {rupeesForTwo}
          </Text>
        </View>

        <Text style={[styles.availableCoupon]}>
          <Icon name="brightness-percent" size={18} color="darkorange" />
          &nbsp;Use {coupon}
        </Text>
      </View>
    </View>
  );
};

const ListFooter = () => {
  return (
    <View style={[styles.footerWrap]}>
      <Image
        style={[styles.footerImage]}
        source={require('../../../assests/images/swiggyTagline.png')}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  restaurantsData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(CuisinesRestaurants);

const styles = StyleSheet.create({
  eachRestaurant: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    height: responsiveHeight(25),
    // borderWidth: 1,
  },

  restaurantProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveWidth(6),
    marginRight: responsiveWidth(2),
    height: responsiveHeight(20),
  },
  restaurantImage: {
    // borderWidth: 1,
    width: responsiveWidth(23),
    height: responsiveWidth(30),
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    height: responsiveWidth(33),
    marginVertical: 7,
  },
  maxDiscount: {
    backgroundColor: Colors.ORANGE,
    color: Colors.WHITE,
    padding: 7,
    paddingVertical: 0,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 17,
    width: responsiveWidth(20),
    position: 'absolute',
    alignSelf: 'flex-end',
  },

  restaurantDetails: {
    // borderWidth: 1,
    justifyContent: 'center',
    width: responsiveWidth(65),
    height: responsiveHeight(20),
    marginVertical: responsiveWidth(6.5),
    padding: 5,
  },
  restaurantDetailsHeader: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  bestSafety: {
    fontWeight: 'bold',
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 1,
  },

  restaurantType: {
    // borderWidth: 1,
    padding: 2,
    color: 'grey',
  },

  restaurantLocation: {
    // borderWidth: 1,
    padding: 2,
    color: 'grey',
  },

  restaurantReview: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    flexDirection: 'row',
    padding: 2,
    marginBottom: 4,
    paddingBottom: 10,
  },
  rating: {
    fontWeight: 'bold',
    color: 'dimgrey',
  },

  availableCoupon: {
    // borderWidth: 1,
    padding: 2,
  },

  headerImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(17),
  },
  headerBottom: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    // borderWidth: 1,
    height: responsiveHeight(22),
    paddingTop: responsiveHeight(3),
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: responsiveHeight(1),
  },
  headerDescription: {
    color: 'dimgrey',
    paddingBottom: responsiveHeight(1),
  },
  noOfRestaurantsNearByWrap: {
    paddingTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noOfRestaurantsNearBy: {
    fontSize: 13,
  },
  sortFilter: {},

  footerWrap: {
    height: responsiveWidth(110),
    backgroundColor: Colors.WHITE,
    justifyContent: 'flex-end',
  },
  footerImage: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
  },
});
