import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/CurrentLocationStyle';
import Geolocation from 'react-native-geolocation-service';
import {fetchLocationName} from '../store/actions/locationAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class CurrentLocation extends Component {
  state = {
    latitude: '',
    longitude: '',
  };

  getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        // console.log(this.state);
      },
      error => {
        console.log(error.code, error.message);
      },
      // {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    this.props.fetchLocationName(this.state);

    console.log(this.state);
  };
  render() {
    const {location} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <TouchableOpacity
          style={[styles.getLocation]}
          onPress={() => this.getLocation()}>
          <Icon name="crosshairs-gps" style={[styles.gpsIcon]} />
          <Text style={[styles.gpsText]}>Use GPS Location</Text>
        </TouchableOpacity>
        <View style={[styles.savedAddresses]}>
          <Text style={[styles.headerTitle]}>SAVED ADDRESSES</Text>
          {location !== 'Not Set Head over to set!' ? (
            <View style={[styles.eachAddress]}>
              <Icon name="home-variant-outline" style={[styles.icon]} />
              <View style={[styles.addressBox]}>
                <Text style={[styles.addressType]}>Home</Text>
                <Text numberOfLines={1} style={[styles.address]}>
                  {location}
                </Text>
              </View>
            </View>
          ) : (
            <Text style={[styles.empty]}>Add address to show here</Text>
          )}
          <Text style={[styles.poweredByGoogle]}>powered by Google</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  location: state.locationReducer.location,
});

export default connect(mapStateToProps, {fetchLocationName})(CurrentLocation);
