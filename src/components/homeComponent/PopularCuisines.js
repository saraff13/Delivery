import React, {Component} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Colors from '../../utils/Colors';
import {connect} from 'react-redux';
import {getRestaurants} from '../../store/actions/restaurantsAction';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

class PopularCuisines extends Component {
  componentDidMount() {
    this.fetchData(false);
  }
  fetchData = (isPaginated = true) => {
    const {getRestaurants, cuisinesData} = this.props;
    if (!isPaginated) {
      getRestaurants({data: [], pageNo: 1});
      return;
    }
    const data = (cuisinesData && cuisinesData.data) || [];
    const currPageNo = (cuisinesData && cuisinesData.page) || 0;
    const pageNo = currPageNo + 1;
    if (pageNo <= cuisinesData.total_pages) getRestaurants({data, pageNo});
  };
  render() {
    const {cuisinesData, navigation} = this.props;
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={(cuisinesData && cuisinesData.data) || []}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CuisinesRestaurants', {item})
              }>
              <RenderItem item={item} />
            </TouchableOpacity>
          );
        }}
        refreshControl={<RefreshControl refreshing={false} />}
        onEndReached={() => this.fetchData()}
        onEndReachedThreshold={0.01}
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
    cuisineImage = avatar,
    cuisineName = `${first_name} ${last_name}`,
  } = item.item;
  return (
    <View style={[styles.eachCuisine]}>
      <Image source={{uri: cuisineImage}} style={[styles.cuisineImage]} />
      <Text style={[styles.cuisineName]}>{cuisineName}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  cuisinesData: state.restaurantsReducer.data,
});

export default connect(mapStateToProps, {getRestaurants})(PopularCuisines);

const styles = StyleSheet.create({
  eachCuisine: {
    height: responsiveHeight(17),
    width: responsiveHeight(10),
    marginRight: responsiveWidth(6),
    // borderWidth: 1,
  },
  cuisineImage: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: 50,
  },
  cuisineName: {
    width: responsiveHeight(10),
    marginTop: 5,
    color: 'dimgrey',
    // borderWidth: 1,
    textAlign: 'center',
  },
});
