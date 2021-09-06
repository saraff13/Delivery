import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Header';

class Help extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} title="HELP" />
        <View>
          <Text>help</Text>
        </View>
      </>
    );
  }
}

export default connect(null)(Help);
