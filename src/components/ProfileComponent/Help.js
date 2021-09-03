import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';

class Help extends Component {
  render() {
    return (
      <>
        <View>
          <Text>help</Text>
        </View>
        <Header
          position={'absolute'}
          navigation={this.props.navigation}
          title="HELP"
        />
      </>
    );
  }
}

export default connect(null)(Help);
