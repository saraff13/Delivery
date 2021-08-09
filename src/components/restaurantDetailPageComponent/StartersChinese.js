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
import {getdishes} from '../../store/actions/dishesAction';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import * as Colors from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class StartersChinese extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    this.fetchData(false);
  }
  fetchData = (isPaginated = true) => {
    const {getdishes, dishesData} = this.props;
    if (!isPaginated) {
      getdishes({data: [], pageNo: 1});
      return;
    }
    const data = (dishesData && dishesData.data) || [];
    const currPageNo = (dishesData && dishesData.page) || 0;
    const pageNo = currPageNo + 1;
    if (pageNo <= dishesData.total_pages) getdishes({data, pageNo});
  };
  render() {
    const {dishesData, showOnlyVegDishes} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={(dishesData && dishesData.data) || []}
          renderItem={({item}) => {
            const {
              avatar,
              email,
              first_name,
              last_name,
              id,

              dishImage = avatar,
              dishName = `${first_name} ${last_name}`,
              price = id * 78,
              tag,
              egg = false,
              chicken = true,
            } = item;
            let iconColor = Colors.GREEN;
            if (egg) iconColor = 'orange';
            else if (chicken) iconColor = 'brown';
            let height = responsiveHeight(17);
            if (dishImage) height = responsiveHeight(26);
            if (showOnlyVegDishes && (egg || chicken)) return null;
            return (
              <View
                style={[
                  styles.eachDishBox,
                  {height, borderTopWidth: id === 1 ? 0 : 0.5},
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

                {dishImage ? (
                  <View style={[styles.rightDishBoxWithImage]}>
                    <Image
                      source={{uri: dishImage}}
                      style={[styles.dishImage]}
                    />
                    <TouchableOpacity style={[styles.addBox]}>
                      <Text style={[styles.textAdd]}>ADD</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={[styles.rightDishBoxNoImage]}>
                    <TouchableOpacity style={[styles.addBoxNoImage]}>
                      <Text style={[styles.textAddNoImage]}>ADD</Text>
                    </TouchableOpacity>
                  </View>
                )}
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
  dishesData: state.dishesReducer.data,
});

export default connect(mapStateToProps, {getdishes})(StartersChinese);

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
    height: 17,
    width: 17,
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
    paddingBottom: 7,
  },

  rightDishBoxWithImage: {
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
    height: responsiveHeight(6),
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    marginHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(16.5),
  },
  textAdd: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },

  rightDishBoxNoImage: {
    // borderWidth: 1,
    justifyContent: 'center',
  },
  addBoxNoImage: {
    width: responsiveWidth(25),
    height: responsiveHeight(6),
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    marginHorizontal: responsiveWidth(4),
  },
  textAddNoImage: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
