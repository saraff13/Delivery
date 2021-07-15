import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Loader from './src/components/Loader';
import Toast from './src/components/Toast';
import Auth from './src/screens/Auth';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
        <Loader />
        <Toast />
      </Provider>
    );
  }
}

export default App;
