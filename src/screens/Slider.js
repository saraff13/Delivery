import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/SliderStyle';
import {responsiveHeight} from '../utils/Responsive';

const images = new Array(5).fill('../assests/images/swiggyDelivery.jpg');

const window = Dimensions.get('window');

class Slider extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window,
    },
  };

  render() {
    const windowWidth = this.state.dimensions.window.width;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}>
            <View style={{width: windowWidth, height: responsiveHeight(37)}}>
              <ImageBackground
                source={require('../assests/images/swiggy1.jpg')}
                style={styles.card}></ImageBackground>
            </View>
            <View style={{width: windowWidth, height: responsiveHeight(37)}}>
              <ImageBackground
                source={require('../assests/images/swiggy0.jpg')}
                style={styles.card}></ImageBackground>
            </View>
            <View style={{width: windowWidth, height: responsiveHeight(37)}}>
              <ImageBackground
                source={require('../assests/images/swiggy2.jpg')}
                style={styles.card}></ImageBackground>
            </View>
            <View style={{width: windowWidth, height: responsiveHeight(37)}}>
              <ImageBackground
                source={require('../assests/images/swiggyDelivery.jpg')}
                style={styles.card}></ImageBackground>
            </View>
            <View style={{width: windowWidth, height: responsiveHeight(37)}}>
              <ImageBackground
                source={require('../assests/images/swiggy5.jpg')}
                style={styles.card}></ImageBackground>
            </View>
          </ScrollView>

          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = this.scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View>
        </View>
        <Button
          title="Get Started"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </SafeAreaView>
    );
  }
}

export default Slider;
