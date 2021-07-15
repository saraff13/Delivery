import * as types from '../actionTypes';

export const initLogin = request => ({
  type: types.LOGIN_START,
  payload: request,
});

export const setLoginData = payload => ({
  type: types.SET_LOGIN_DATA,
  payload,
});
