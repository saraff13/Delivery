import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';
import {getRestaurants} from '../../store/actions/restaurantsAction';
import * as Colors from '../../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Favourites extends Component {
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
    console.log(restaurantsData);
    return (
      <>
        <Header navigation={this.props.navigation} title="FAVOURITES" />
        <FlatList
          style={{backgroundColor: Colors.WHITE}}
          showsVerticalScrollIndicator={false}
          data={(restaurantsData && restaurantsData.data) || []}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[styles.eachTouchableRestaurant]}
                onPress={() =>
                  navigation.navigate('RestaurantDetails', {item})
                }>
                <RenderItem item={item} />
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={() => {
            return (
              <>
                <Text style={[styles.restaurantTypeText]}>
                  CURRENTLY UNSERVICABLE
                </Text>
                <FlatList
                  style={{backgroundColor: Colors.WHITE}}
                  showsVerticalScrollIndicator={false}
                  data={(restaurantsData && restaurantsData.data) || []}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={[styles.eachTouchableRestaurant]}
                        onPress={() =>
                          navigation.navigate('RestaurantDetails', {item})
                        }>
                        <RenderClosedItem item={item} />
                      </TouchableOpacity>
                    );
                  }}
                  ListFooterComponent={() => {
                    return (
                      <>
                        <Text style={[styles.restaurantTypeText]}>
                          CURRENTLY UNAVAILABLE
                        </Text>
                        <FlatList
                          style={{backgroundColor: Colors.WHITE}}
                          showsVerticalScrollIndicator={false}
                          data={(restaurantsData && restaurantsData.data) || []}
                          renderItem={({item}) => {
                            return (
                              <TouchableOpacity
                                style={[styles.eachTouchableRestaurant]}
                                onPress={() =>
                                  navigation.navigate('RestaurantDetails', {
                                    item,
                                  })
                                }>
                                <RenderClosedItem item={item} />
                              </TouchableOpacity>
                            );
                          }}
                          ListFooterComponent={() => {
                            return (
                              <Text style={{marginTop: responsiveHeight(2.5)}}>
                                {null}
                              </Text>
                            );
                          }}
                        />
                      </>
                    );
                  }}
                />
              </>
            );
          }}
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

const RenderClosedItem = item => {
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
        <View style={styles.overlay} />
      </View>

      <View style={[styles.restaurantDetails]}>
        <Text numberOfLines={1} style={[styles.restaurantName]}>
          {restaurantName} Restaurant
        </Text>

        <Text numberOfLines={1} style={[styles.restaurantType]}>
          {type}
        </Text>

        <Text style={[styles.restaurantLocation]}>
          {address}, {distanceKM}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  restaurantsData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(Favourites);

const styles = StyleSheet.create({
  eachTouchableRestaurant: {
    height: responsiveHeight(20),
    marginVertical: responsiveHeight(2.5),
    backgroundColor: Colors.WHITE,
  },
  restaurantTypeText: {
    marginTop: responsiveHeight(2.5),
    marginHorizontal: 15,
    fontSize: 13,
    fontWeight: '700',
    color: 'dimgrey',
  },
  eachRestaurant: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(20),
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
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 10,
    height: responsiveWidth(31),
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
    height: responsiveHeight(55),
  },
  headerBottom: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: responsiveHeight(6),
  },
  headerTitle: {
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
