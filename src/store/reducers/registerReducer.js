import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  success: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTRATION_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.REGISTRATION_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        success: action.payload,
      };
    case types.REGISTRATION_FAIL:
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
