import * as types from '../actionTypes';

export const fetchLocationName = payload => ({
  type: types.FETCH_LOCATION_START,
  payload,
});
