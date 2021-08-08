import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import PopularCuisines from '../components/homeComponent/PopularCuisines';
import styles from '../styles/SearchStyle';
import Item from '../components/searchComponent/SearchResult';
import {list} from '../utils/SearchData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Search extends Component {
  state = {
    search: '',
  };

  filterList() {
    return list.filter(listItem =>
      listItem.name.toLowerCase().includes(this.state.search.toLowerCase()),
    );
  }

  render() {
    const {search} = this.state;
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.searchBox]}>
          <TextInput
            placeholder="Search for restaurants and food"
            value={search}
            onChangeText={value => this.setState({search: value})}
            style={[styles.searchInput]}
            numberOfLines={1}
          />
          {search ? (
            <Icon
              onPress={() => this.setState({search: ''})}
              name="close"
              style={[styles.crossIcon]}
            />
          ) : (
            <View />
          )}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.searchResultScroller]}>
          {search ? (
            this.filterList().map((listItem, index) => (
              <Item key={index} listItem={listItem} />
            ))
          ) : (
            <>
              <View style={[styles.recentSearches]}>
                <View style={[styles.recentSearchesHeader]}>
                  <Text style={[styles.headerTitle]}>Recent Searches</Text>
                  <TouchableOpacity>
                    <Text style={[styles.headerShowMoreText]}>SHOW MORE</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => this.setState({search: 'Pizza Hut'})}
                  style={[styles.recentlySearchedBox]}>
                  <Icon name="magnify" style={[styles.searchIcon]} />
                  <Text style={[styles.recentlySearchedText]}>Pizza Hut</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({search: 'Paneer'})}
                  style={[styles.recentlySearchedBox]}>
                  <Icon name="magnify" style={[styles.searchIcon]} />
                  <Text style={[styles.recentlySearchedText]}>Paneer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({search: 'Chicken'})}
                  style={[styles.recentlySearchedBox]}>
                  <Icon name="magnify" style={[styles.searchIcon]} />
                  <Text style={[styles.recentlySearchedText]}>Chicken</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.popularCuisines]}>
                <Text style={[styles.popularCuisinesText]}>
                  Popular cuisines around you
                </Text>
                <PopularCuisines navigation={this.props.navigation} />
              </View>

              <Text style={[styles.seperators]} />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// export default Profile;

export default connect(null)(Search);
