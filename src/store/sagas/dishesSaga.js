import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/API';
import * as TOAST_TYPE from '../../utils/toastTypes';

export default function* dishesSaga() {
  yield takeLatest(types.GET_DISHES_START, getDishes);
}

function* getDishes(action) {
  if (action.payload.pageNo == 1) {
    yield put({
      type: types.LOADER_START,
    });
  }

  try {
    // console.log('action.payload.pageNo => ', action.payload.pageNo);

    const api = new API();
    const response = yield api.call({
      apiEndPoint: `users?page=${action.payload.pageNo}`,
      type: 'get',
      params: action.payload,
    });

    // console.log('Saga response => ', response);

    yield put({
      type: types.GET_DISHES_SUCCESS,
      payload: {
        newData: response.data,
        oldData: action.payload.data,
      },
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: error.message,
        type: TOAST_TYPE.FAIL,
      },
    });
    console.log('Saga error => ', error);
    yield put({
      type: types.GET_DISHES_FAIL,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  }
}
