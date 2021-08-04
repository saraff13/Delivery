import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

const images = new Array(5).fill('a');
const window = Dimensions.get('window');

class ImageSlider extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window,
    },
  };

  onDimensionsChange = ({window}) => {
    this.setState({dimensions: {window}});
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this.onDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onDimensionsChange);
  }

  render() {
    const windowWidth = this.state.dimensions.window.width;

    return (
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          <Image
            style={[styles.eachImage]}
            source={require('../../assests/images/swiggy0.jpg')}
          />
          <Image
            style={[styles.eachImage]}
            source={require('../../assests/images/swiggy1.jpg')}
          />
          <Image
            style={[styles.eachImage]}
            source={require('../../assests/images/swiggy2.jpg')}
          />
          <Image
            style={[styles.eachImage]}
            source={require('../../assests/images/swiggy5.jpg')}
          />
          <Image
            style={[styles.eachImage]}
            source={require('../../assests/images/swiggy0.jpg')}
          />
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = this.scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 12, 8],
              extrapolate: 'clamp',
            });
            const height = this.scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 12, 8],
              extrapolate: 'clamp',
            });
            const bgColor = this.scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: ['lightgrey', 'darkorange', 'lightgrey'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[
                  styles.normalDot,
                  {
                    width,
                    height,
                    backgroundColor: bgColor,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default connect(null)(ImageSlider);

const styles = StyleSheet.create({
  scrollContainer: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachImage: {
    width: responsiveWidth(92),
    height: responsiveWidth(50),
    marginHorizontal: responsiveWidth(4),
    borderRadius: 5,
    marginVertical: 10,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: 'silver',
    marginHorizontal: 4,
    // borderWidth: 1,
  },
  indicatorContainer: {
    // borderWidth: 1,
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
});
