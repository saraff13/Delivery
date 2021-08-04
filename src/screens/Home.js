import React, {Component} from 'react';
import {Image, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/HomeStyle';
import HomeHeader from '../components/homeComponent/HomeHeader';
import Button from '../components/homeComponent/Button';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopPicks from '../components/homeComponent/TopPicks';
import PopularCuisines from '../components/homeComponent/PopularCuisines';
import PopularBrands from '../components/homeComponent/PopularBrands';
import Spotlight from '../components/homeComponent/Spotlight';
import Coupons from '../components/homeComponent/Coupons';
import FreeDelivery from '../components/homeComponent/FreeDelivery';
import ExpressDelivery from '../components/homeComponent/ExpressDelivery';
import PromotedRestaurants from '../components/homeComponent/PromotedRestaurants';
import NearByRestaurants from '../components/homeComponent/NearByRestaurants';
import ImageSlider from '../components/homeComponent/ImageSlider';

const Icon = MaterialCommunityIcons;

class Home extends Component {
  render() {
    return (
      <>
        <HomeHeader title="Home" navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.main]}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Restaurants')}
            style={[styles.noContactWrap]}>
            <View style={[styles.noContactBox]}>
              <Text style={[styles.restaurantsText]}>Restaurants</Text>
              <Text style={[styles.noContactText]}>
                No-contact delivery available
              </Text>
            </View>
            <Text style={[styles.viewAllText]}>
              View all <Icon name="arrow-right" style={[styles.viewAllIcon]} />
            </Text>
            <Image
              style={[styles.noContactImage]}
              source={require('../assests/images/noContact.jpg')}
            />
          </TouchableOpacity>

          <View style={[styles.topPicks]}>
            <Text style={[styles.topPicksText]}>
              <Icon name="thumb-up-outline" style={[styles.topPicksIcon]} />
              &nbsp; Top Picks For You
            </Text>
            <TopPicks navigation={this.props.navigation} />
          </View>
          <View style={[styles.imageSlider]}>
            <ImageSlider />
          </View>

          <View style={[styles.couponsForYou]}>
            <Text style={[styles.couponsForYouText]}>Coupons for you</Text>
            <Coupons />
          </View>

          <Text style={[styles.seperators]} />

          <View style={[styles.popularCuisines]}>
            <Text style={[styles.popularCuisinesText]}>
              Popular cuisines around you
            </Text>
            <PopularCuisines />
          </View>

          <Text style={[styles.seperators]} />

          <View style={[styles.spotlight]}>
            <View style={[styles.spotlightHeader]}>
              <Text style={[styles.spotlightText]}>
                <Icon
                  name="alarm-light-outline"
                  style={[styles.spotlightIcon]}
                />
                &nbsp;In the Spotlight!
              </Text>
              <TouchableOpacity style={[styles.seeAllBox]}>
                <Text style={[styles.seeAllText]}>SEE ALL&nbsp;</Text>
                <Icon name="chevron-right" style={[styles.seeAllIcon]} />
              </TouchableOpacity>
            </View>

            <Text style={[styles.spotlightDetail]}>
              Explore sponsored partner brands
            </Text>
            <Spotlight navigation={this.props.navigation} />
          </View>

          <Text style={[styles.seperators]} />

          <View style={[styles.popularBrands]}>
            <Text style={[styles.popularBrandsText]}>Popular Brands</Text>
            <Text style={[styles.popularBrandsDetail]}>
              Most ordered from around your locality
            </Text>
            <PopularBrands />
          </View>

          <Text style={[styles.seperators]} />

          <View style={[styles.expressDelivery]}>
            <View style={[styles.expresseDeliveryHeader]}>
              <Text style={[styles.expressDeliveryText]}>
                <Icon
                  name="lightning-bolt-outline"
                  style={[styles.expressDeliveryIcon]}
                />
                &nbsp;Express Delivery
              </Text>
            </View>

            <Text style={[styles.expressDeliveryDetail]}>
              Lightning fast deliveries in 30 minutes or less.
            </Text>
            <Text style={[styles.termsAndConditions]}>{`T&C Apply.`}</Text>
            <ExpressDelivery navigation={this.props.navigation} />
          </View>

          <Text style={[styles.seperators]} />

          <View style={[styles.freeDelivery]}>
            <View style={[styles.freeDeliveryHeader]}>
              <Text style={[styles.freeDeliveryText]}>
                <Icon
                  name="brightness-percent"
                  style={[styles.freeDeliveryIcon]}
                />
                &nbsp;Free Delivery
              </Text>
              <TouchableOpacity style={[styles.seeAllBox]}>
                <Text style={[styles.seeAllText]}>SEE ALL&nbsp;</Text>
                <Icon name="chevron-right" style={[styles.seeAllIcon]} />
              </TouchableOpacity>
            </View>

            <Text style={[styles.freeDeliveryDetail]}>
              Delicious Tastes, Delivered Free.
            </Text>
            <FreeDelivery navigation={this.props.navigation} />
          </View>

          <Text style={[styles.seperators]} />

          <View style={[styles.promotedRestaurants]}>
            <Text style={[styles.promotedRestaurantsText]}>
              Promoted Restaurants
            </Text>

            <PromotedRestaurants navigation={this.props.navigation} />
          </View>

          <Text style={[styles.specialSeperator]} />

          <View style={[styles.nearByRestaurants]}>
            <Text style={[styles.nearByRestaurantsText]}>
              All Restaurants Nearby
            </Text>
            <Text style={[styles.nearByRestaurantsDetail]}>
              Discover unique tastes near you
            </Text>

            <NearByRestaurants navigation={this.props.navigation} />
          </View>

          <Text style={[styles.specialSeperator]} />

          <View style={[styles.button]}>
            <Button
              title="See all restaurants"
              onPress={() => this.props.navigation.navigate('Restaurants')}
            />
          </View>
          <Image
            source={require('../assests/images/swiggyTagline.png')}
            style={[styles.tagLineImage]}
          />
        </ScrollView>
      </>
    );
  }
}

export default connect(null)(Home);
