import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/MapStyle';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic3VtaXQtc2FyYWZmIiwiYSI6ImNrcjd0d3Q3eTAyZnQycnF4cGI5bTUzdGUifQ.CtuPwBQoYevzbPZKppbWbg',
);

class Map extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.mapContainer]}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.UserLocation
              visible={true}
              onUpdate={this.onUserLocationUpdate}
            />
            <MapboxGL.Camera
              zoomLevel={16}
              followUserMode={'normal'}
              followUserLocation
            />
          </MapboxGL.MapView>
        </View>
      </SafeAreaView>
    );
  }
}

// export default Profile;

export default connect(null)(Map);
