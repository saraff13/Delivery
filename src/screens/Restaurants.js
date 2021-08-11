import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {getRestaurants} from '../store/actions/restaurantsAction';
import styles from '../styles/RestaurantsStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveWidth} from '../utils/Responsive';
import Header from '../components/Header';

const Icon = MaterialCommunityIcons;

class Restaurants extends Component {
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
    const {restaurantsData} = this.props;
    // console.log(restaurantsData);
    return (
      <>
        <Header navigation={this.props.navigation} title="Home" />
        <FlatList
          data={(restaurantsData && restaurantsData.data) || []}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('RestaurantDetails', {item})
                }>
                <EachRestaurant item={item} />
              </TouchableOpacity>
            );
          }}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
          onEndReached={() => this.fetchData()}
          onEndReachedThreshold={0.01}
          showsVerticalScrollIndicator={false}
        />
      </>
    );
  }
}

const EachRestaurant = item => {
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
    isOpen = true,
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
    <View>
      {isOpen ? (
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
      ) : (
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
      )}
    </View>
  );
};

const ListHeader = () => {
  return (
    <View style={[styles.header]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.headerImageScroll]}>
        <Image
          style={[styles.headerImage]}
          source={require('../assests/images/swiggy0.jpg')}
        />
        <Image
          style={[styles.headerImage]}
          source={require('../assests/images/swiggy2.jpg')}
        />
        <Image
          style={[styles.headerImage]}
          source={require('../assests/images/swiggy5.jpg')}
        />
        <Image
          style={[styles.headerImage]}
          source={require('../assests/images/swiggyDelivery.jpg')}
        />
        <Image
          style={[styles.headerImage]}
          source={require('../assests/images/swiggy2.jpg')}
        />
        <Image
          style={[styles.headerImage]}
          source={require('../assests/images/swiggy5.jpg')}
        />
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.headerScrollIcons]}>
        <View style={[styles.Features]}>
          <Icon style={[styles.headerIcons]} name="shield-check" />
          <Text style={[styles.iconText]}>Veg Only</Text>
        </View>
        <View style={[styles.Features]}>
          <Icon style={[styles.headerIcons]} name="lightning-bolt" />
          <Text style={[styles.iconText]}>Express Delivery</Text>
        </View>
        <View style={[styles.Features]}>
          <Icon style={[styles.headerIcons]} name="star-circle-outline" />
          <Text style={[styles.iconText]}>Top Rated</Text>
        </View>
        <View style={[styles.Features]}>
          <Icon style={[styles.headerIcons]} name="shield-check" />
          <Text style={[styles.iconText]}>Best In Safety</Text>
        </View>
        <View style={[styles.Features]}>
          <Icon style={[styles.headerIcons]} name="moped" />
          <Text style={[styles.iconText]}>Free Delivery</Text>
        </View>
      </ScrollView>

      <View style={[styles.headerBottom]}>
        <Text style={[styles.headerTitle]}>ALL RESTAURANTS</Text>
        <Text style={[styles.sortFilter]}>
          <Icon name="tune-vertical" size={15} />
          SORT / FILTER
        </Text>
      </View>
    </View>
  );
};

const ListFooter = () => {
  return (
    <Image
      style={[styles.footerImage]}
      source={require('../assests/images/swiggyTagline.png')}
    />
  );
};

const mapStateToProps = state => ({
  restaurantsData: state.restaurantsReducer.data,
});
export default connect(mapStateToProps, {getRestaurants})(Restaurants);
