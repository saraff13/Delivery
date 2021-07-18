import * as types from '../actionTypes';
import {takeLatest, put} from 'redux-saga/effects';
import API from '../../utils/API';
import * as TOAST_TYPE from '../../utils/toastTypes';

export default function* registerSaga() {
  yield takeLatest(types.REGISTRATION_START, register);
}

function* register(action) {
  yield put({
    type: types.LOADER_START,
  });
  try {
    const api = new API();
    const response = yield api.call({
      type: 'post',
      apiEndPoint: 'register',
      params: action.payload,
    });

    // console.log('Saga response => ', response);

    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: 'Successfully Registered',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.REGISTRATION_SUCCESS,
      payload: response.data,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    console.log('Saga error => ', error);

    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: error.message,
        type: TOAST_TYPE.FAIL,
      },
    });

    yield put({
      type: types.REGISTRATION_FAIL,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  }
}
