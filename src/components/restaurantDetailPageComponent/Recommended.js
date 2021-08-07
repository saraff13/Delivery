import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  LogBox,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import {getRestaurants} from '../../store/actions/restaurantsAction';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import * as Colors from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from 'chalk';

const Icon = MaterialCommunityIcons;

class Recommended extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
    const {restaurantsData, showOnlyVegDishes} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={(restaurantsData && restaurantsData.data) || []}
          renderItem={({item}) => {
            const {
              avatar,
              email,
              first_name,
              last_name,
              id,

              dishImage = avatar,
              dishName = `${first_name} ${last_name}`,
              price = id * 43,
              tag = 'Bestseller',
              egg = false,
              chicken = false,
            } = item;
            let iconColor = Colors.GREEN;
            if (egg) iconColor = 'orange';
            else if (chicken) iconColor = 'brown';
            let height = responsiveHeight(20);
            if (avatar) height = responsiveHeight(26);
            return (
              <View
                style={[
                  styles.eachDishBox,
                  {height, borderTopWidth: id === 1 ? 0 : 1},
                ]}>
                <View style={[styles.leftDishBox]}>
                  <View style={[styles.vegAndTagBox]}>
                    <View
                      style={[styles.customVegIcon, {borderColor: iconColor}]}>
                      <View
                        style={[
                          styles.customVegIconCircle,
                          {backgroundColor: iconColor},
                        ]}
                      />
                    </View>
                    {tag && (
                      <>
                        <Icon name="star" style={[styles.tagStarIcon]} />
                        <Text style={[styles.tagText]}>{tag}</Text>
                      </>
                    )}
                  </View>
                  <Text style={[styles.dishName]}>{dishName}</Text>
                  <Text style={[styles.price]}>
                    <Icon name="currency-inr" size={16} />
                    {price}
                  </Text>
                </View>

                <View style={[styles.rightDishBox]}>
                  <Image source={{uri: dishImage}} style={[styles.dishImage]} />
                  <TouchableOpacity style={[styles.addBox]}>
                    <Text style={[styles.textAdd]}>ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          refreshControl={<RefreshControl refreshing={false} />}
          onEndReached={() => this.fetchData()}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  restaurantsData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(Recommended);

const styles = StyleSheet.create({
  eachDishBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderColor: 'lightgrey',
  },
  leftDishBox: {
    // borderWidth: 1,
    justifyContent: 'center',
  },
  vegAndTagBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customVegIcon: {
    borderWidth: 1,
    height: 16,
    width: 16,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customVegIconCircle: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  tagStarIcon: {
    fontSize: 17,
    color: Colors.ORANGE,
    marginRight: 2,
  },
  tagText: {
    fontWeight: '700',
    color: Colors.ORANGE,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.BLACK,
    marginTop: 3,
    marginBottom: 5,
  },
  price: {
    color: 'dimgrey',
    fontSize: 16,
  },

  rightDishBox: {
    // borderWidth: 1,
  },
  dishImage: {
    height: responsiveWidth(28),
    width: responsiveWidth(33),
    borderRadius: 10,
    marginTop: responsiveHeight(3.5),
  },
  addBox: {
    position: 'absolute',
    width: responsiveWidth(25),
    height: responsiveHeight(5),
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    marginHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(17.5),
  },
  textAdd: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
