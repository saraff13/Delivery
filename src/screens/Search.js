import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import PopularCuisines from '../components/homeComponent/PopularCuisines';
import styles from '../styles/SearchStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Search extends Component {
  state = {
    searchText: '',
  };
  render() {
    const {searchText} = this.state;
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.searchBox]}>
          <TextInput
            placeholder="Search for restaurants and food"
            value={searchText}
            onChangeText={value => this.setState({searchText: value})}
            style={[styles.searchInput]}
          />
        </View>

        <View style={[styles.recentSearches]}>
          <View style={[styles.recentSearchesHeader]}>
            <Text style={[styles.headerTitle]}>Recent Searches</Text>
            <TouchableOpacity>
              <Text style={[styles.headerShowMoreText]}>SHOW MORE</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.recentlySearchedBox]}>
            <Icon name="magnify" style={[styles.searchIcon]} />
            <Text style={[styles.recentlySearchedText]}>Pizza Hut</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.recentlySearchedBox]}>
            <Icon name="magnify" style={[styles.searchIcon]} />
            <Text style={[styles.recentlySearchedText]}>Barbeque Nation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.recentlySearchedBox]}>
            <Icon name="magnify" style={[styles.searchIcon]} />
            <Text style={[styles.recentlySearchedText]}>McDonald</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.popularCuisines]}>
          <Text style={[styles.popularCuisinesText]}>
            Popular cuisines around you
          </Text>
          <PopularCuisines />
        </View>

        <Text style={[styles.seperators]} />
      </SafeAreaView>
    );
  }
}

// export default Profile;

export default connect(null)(Search);
