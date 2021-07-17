import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import loaderReducer from './loaderReducer';
import toastReducer from './toastReducer';
import restaurantsReducer from './restaurantsReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  loaderReducer,
  toastReducer,
  restaurantsReducer,
});
