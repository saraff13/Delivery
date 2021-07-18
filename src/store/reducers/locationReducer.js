import * as types from '../actionTypes';

const INITIAL_STATE = {
  location: 'Not Set Head over to set!',
  error: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_LOCATION_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        location: action.payload,
        loading: false,
      };
    case types.FETCH_LOCATION_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
