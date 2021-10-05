import React, {Component} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {getdishes} from '../../store/actions/dishesAction';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import * as Colors from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class PastOrder extends Component {
  componentDidMount() {
    this.fetchData(false);
  }
  fetchData = (isPaginated = true) => {
    const {ordersData, getdishes} = this.props;
    if (!isPaginated) {
      getdishes({data: [], pageNo: 0});
      return;
    }
    const data = (ordersData && ordersData.data) || [];
    const currentPage = (ordersData && ordersData.page) || 0;
    const nextPage = currentPage + 1;
    if (nextPage <= ordersData.total_pages) getdishes({data, pageNo: nextPage});
  };
  render() {
    const {ordersData} = this.props;
    return (
      <>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={(ordersData && ordersData.data) || []}
            renderItem={({item}) => {
              const {
                first_name,
                last_name,
                id,

                restaurantName = `${first_name} ${last_name}`,
                restaurantAddress = 'BHU, Lanka, Varanasi',
                billTotal = 84 * id,
                status = 'Delivered',
                dishOrdered = 'Paneer Butter Masala',
                quantityOrdered = id,
                dateTime = 'July 14, 7:37 PM',
                deliveryRating = '4',
                foodRating = '5',
              } = item;
              let borderBottomWidth = 1.5;
              if (id == ordersData.total) borderBottomWidth = 0;
              return (
                <TouchableOpacity
                  style={[styles.eachOrder, {borderBottomWidth}]}>
                  <View style={[styles.orderHeader]}>
                    <View style={[styles.orderHeaderTitle]}>
                      <Text style={[styles.restaurantName]}>
                        {restaurantName}
                      </Text>
                      <View style={[styles.orderStatus]}>
                        <Text style={[styles.orderStatusTitle]}>{status}</Text>
                        <Icon
                          name="checkbox-marked-circle"
                          size={18}
                          color="green"
                        />
                      </View>
                    </View>

                    <Text style={[styles.restaurantAddress]}>
                      {restaurantAddress}
                    </Text>
                    <View style={[styles.billTotal]}>
                      <Icon name="currency-inr" size={14} />
                      <Text style={[styles.billTotalText]}>{billTotal}</Text>
                      <Icon name="chevron-right" size={20} />
                    </View>
                  </View>

                  <Text numberOfLines={1} style={{color: 'darkgrey'}}>
                    .........................................................................................................................................................................................................................
                  </Text>

                  <View style={[styles.orderDetailsBox]}>
                    <Text style={[styles.dishOrdered]}>
                      {dishOrdered} x {quantityOrdered}
                    </Text>
                    <Text style={[styles.dateTime]}>{dateTime}</Text>
                    <View style={[styles.rateAndReorder]}>
                      <TouchableOpacity style={[styles.reorder]}>
                        <Text style={[styles.reorderText]}>REORDER</Text>
                      </TouchableOpacity>
                      {!foodRating ? (
                        <TouchableOpacity style={[styles.rateOrder]}>
                          <Text style={[styles.rateOrderText]}>RATE ORDER</Text>
                        </TouchableOpacity>
                      ) : !deliveryRating ? (
                        <TouchableOpacity style={[styles.rateOrder]}>
                          <Text style={[styles.rateOrderText]}>
                            RATE DELIVERY
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <View />
                      )}
                    </View>

                    <View style={[styles.orderFooterBox]}>
                      <View style={[styles.deliveryRatingBox]}>
                        {deliveryRating ? (
                          <>
                            <Text>Your rating for Delivery</Text>
                            <View style={[styles.ratingDetails]}>
                              <View style={[styles.rating]}>
                                <Icon name="star" style={[styles.ratingIcon]} />
                                <Text style={[styles.ratingText]}>
                                  {deliveryRating}
                                </Text>
                              </View>
                              <Text style={[styles.verticalSeperator]} />
                              <Text style={[styles.ratingText]}>Loved it</Text>
                            </View>
                          </>
                        ) : (
                          <Text style={[styles.notRatedText]}>
                            You haven't rated this delivery yet
                          </Text>
                        )}
                      </View>

                      <View style={[styles.foodRatingBox]}>
                        {foodRating ? (
                          <>
                            <Text>Your Food rating</Text>
                            <View style={[styles.ratingDetails]}>
                              <View style={[styles.rating]}>
                                <Icon name="star" style={[styles.ratingIcon]} />
                                <Text style={[styles.ratingText]}>
                                  {foodRating}
                                </Text>
                              </View>
                              <Text style={[styles.verticalSeperator]} />
                              <Text style={[styles.ratingText]}>Loved it</Text>
                            </View>
                          </>
                        ) : (
                          <Text style={[styles.notRatedText]}>
                            You haven't rated this order yet
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
        {ordersData && ordersData.page < ordersData.total_pages && (
          <TouchableOpacity
            onPress={() => this.fetchData()}
            style={[styles.fetchMoreData]}>
            <Text style={[styles.fetchDataText]}>VIEW MORE ORDERS</Text>
          </TouchableOpacity>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ordersData: state.dishesReducer.data,
});

export default connect(mapStateToProps, {getdishes})(PastOrder);

const styles = StyleSheet.create({
  eachOrder: {
    width: responsiveWidth(92.5),
    height: responsiveHeight(45),
    paddingBottom: responsiveHeight(2),
    paddingTop: responsiveHeight(3),
  },
  orderHeader: {},
  orderHeaderTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    fontSize: 14,
    color: 'dimgrey',
  },
  orderStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderStatusTitle: {
    fontSize: 14,
    color: 'dimgrey',
    fontWeight: '700',
    marginRight: 5,
  },
  billTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  billTotalText: {
    color: 'dimgrey',
    fontSize: 15,
  },

  orderDetailsBox: {
    marginVertical: responsiveHeight(2),
  },
  dishOrdered: {
    marginBottom: responsiveHeight(0.5),
    fontSize: 14,
    color: 'dimgrey',
  },
  dateTime: {
    fontSize: 13,
    color: 'dimgrey',
  },
  rateAndReorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(2.5),
  },
  reorder: {
    width: responsiveWidth(43),
    borderWidth: 1,
    height: responsiveHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.ORANGE,
  },
  reorderText: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.ORANGE,
  },
  rateOrder: {
    width: responsiveWidth(43),
    borderWidth: 1,
    height: responsiveHeight(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateOrderText: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.BLACK,
  },

  orderFooterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryRatingBox: {
    width: responsiveWidth(43),
  },
  foodRatingBox: {
    width: responsiveWidth(43),
  },
  ratingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(0.5),
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontWeight: 'bold',
  },
  ratingIcon: {
    color: Colors.ORANGE,
    marginRight: 5,
    fontSize: 18,
  },
  verticalSeperator: {
    borderWidth: 1,
    height: 12,
    borderWidth: 0.75,
    marginHorizontal: responsiveWidth(7),
  },
  notRatedText: {
    color: 'dimgrey',
    width: responsiveWidth(30),
  },

  fetchMoreData: {
    height: responsiveHeight(8),
    justifyContent: 'center',
  },
  fetchDataText: {
    color: Colors.ORANGE,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
