import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_RESTAURANTS_START:
      return {
        ...state,
        // ...INITIAL_STATE, // we need to update feed but this will set data to null everytime then how will we get old data
        loading: true,
      };
    case types.GET_RESTAURANTS_SUCCESS:
      const updatedData = action.payload.newData;
      updatedData.data = [...action.payload.oldData, ...updatedData.data];
      return {
        ...state,
        ...INITIAL_STATE,
        data: updatedData,
        loading: false,
      };
    case types.GET_RESTAURANTS_FAIL:
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
