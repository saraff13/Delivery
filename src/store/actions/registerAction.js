import * as types from '../actionTypes';

export const initRegistration = payload => ({
  type: types.REGISTRATION_START,
  payload,
});
