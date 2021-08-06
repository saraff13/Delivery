import React, {Component} from 'react';
import {ScrollView, Switch, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './RestaurantDetailsStyle';
import Header from '../../components/Header';
import Recommended from '../../components/restaurantDetailPageComponent/Recommended';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class RestaurantDetails extends Component {
  state = {
    veg: false,
  };
  render() {
    // console.log(this.props.route.params.item);
    const {
      avatar,
      email,
      first_name,
      last_name,
      id,

      restaurantName = `${first_name} ${last_name}`,
      isOpen = true,
      type = 'North Indian, Chinese, Italian, South Indian, Fast Food',
      address = 'BHU, Lanka, Varanasi',
      distanceKM = '1.2 kms',
      rating = '4.5',
      noOfRatings = '1000+',
      tasteRating = '72%',
      packagingRating = '83%',
      portionRating = '80%',
      timeMinutes = '34 mins',
      rupeesForTwo = '500',
      bestSafety = true,
      coupons = [
        {discount: 'FLAT 25% OFF', useCode: 'UNLIMITED', minimumPrice: '350'},
        {discount: '30% OFF UPTO Rs75', useCode: 'TRYNEW', minimumPrice: '129'},
        {discount: 'FREE DELIVERY', useCode: 'FREEDEL', minimumPrice: '129'},
        {
          discount: '20% OFF UPTO Rs100',
          useCode: 'RUPAY100',
          minimumPrice: '129',
        },
        {
          discount: '20% OFF UPTO Rs125',
          useCode: '125ICICI',
          minimumPrice: '500',
        },
      ],
    } = this.props.route.params.item;
    const {veg} = this.state;
    return (
      <>
        <Header navigation={this.props.navigation} showRestaurantHeader />
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.main]}>
          <View style={[styles.restaurantDetails]}>
            <Text style={[styles.restaurantName]}>{restaurantName}</Text>
            <Text numberOfLines={1} style={[styles.restaurantType]}>
              {type}
            </Text>
            <Text style={[styles.restaurantLocation]}>
              {address} | {distanceKM}
            </Text>

            <View style={[styles.restaurantReviewBox]}>
              <View style={[styles.restaurantReviews]}>
                <View style={[styles.reviewDetails]}>
                  <Text style={[styles.review]}>
                    <Icon name="star" size={18} /> {rating}{' '}
                    <Icon name="chevron-right" size={18} />
                  </Text>
                  <Text style={[styles.reviewType]}>{noOfRatings} ratings</Text>
                </View>
                <View style={[styles.reviewDetails]}>
                  <Text style={[styles.review]}>{timeMinutes}</Text>
                  <Text style={[styles.reviewType]}>Delivery Time</Text>
                </View>
                <View style={[styles.reviewDetails]}>
                  <Text style={[styles.review]}>
                    <Icon name="currency-inr" size={15} />
                    {rupeesForTwo}
                  </Text>
                  <Text style={[styles.reviewType]}>Cost for 2</Text>
                </View>
              </View>

              {bestSafety && (
                <View style={[styles.bestSafetyBox]}>
                  <Icon
                    name="shield-check"
                    size={25}
                    style={[styles.bestSafetyIcon]}
                  />
                  <Text style={[styles.bestSafetyDetail]}>
                    This restaurant follows Best Safety Standards
                  </Text>
                  <Icon name="chevron-right" size={25} color="darkcyan" />
                </View>
              )}
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {coupons.map((item, index) => {
                return (
                  <View key={index} style={[styles.eachCouponBox]}>
                    <Text style={[styles.couponFeature]}>
                      <Icon
                        name="brightness-percent"
                        style={[styles.offerIcon]}
                      />
                      {'  '}
                      {item.discount}
                    </Text>
                    <Text style={[styles.couponDetails]}>
                      USE {item.useCode} | ABOVE{' '}
                      <Icon name="currency-inr" size={12} />
                      {item.minimumPrice}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
            <View style={[styles.couponScrollBar]} />
          </View>

          <Text style={[styles.specialSeperator]} />

          <View style={[styles.VegBox]}>
            <View style={[styles.vegToggle]}>
              <Switch
                style={[styles.switch]}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={veg ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => this.setState({veg: !veg})}
                value={veg}
              />
              <Text style={[styles.VegText]}>VEG ONLY</Text>
            </View>

            {bestSafety && (
              <Text style={[styles.bestSafetyText]}>
                <Icon name="shield-check" color="darkorange" size={15} />
                &nbsp;BEST SAFETY
              </Text>
            )}
          </View>

          <View style={[styles.recommended]}>
            <Text style={[styles.recommendedText]}>Recommended</Text>

            {/* <Recommended /> */}
          </View>

          <Text style={[styles.seperators]} />
        </ScrollView>
      </>
    );
  }
}

export default connect(null)(RestaurantDetails);
