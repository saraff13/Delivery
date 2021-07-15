import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import loaderReducer from './loaderReducer';
import toastReducer from './toastReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  loaderReducer,
  toastReducer,
});
