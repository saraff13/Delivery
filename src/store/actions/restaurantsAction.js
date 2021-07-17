import * as types from '../actionTypes';

export const getRestaurants = payload => ({
  type: types.GET_RESTAURANTS_START,
  payload,
});
