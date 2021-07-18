import * as types from '../actionTypes';
import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';
import * as TOAST_TYPE from '../../utils/toastTypes';

const ACCESS_TOKEN =
  'pk.eyJ1Ijoic3VtaXQtc2FyYWZmIiwiYSI6ImNrcjd0d3Q3eTAyZnQycnF4cGI5bTUzdGUifQ.CtuPwBQoYevzbPZKppbWbg';

export default function* locationSaga() {
  yield takeLatest(types.FETCH_LOCATION_START, location);
}

function* location(action) {
  const longitude = action.payload.longitude;
  const latitude = action.payload.latitude;

  yield put({
    type: types.LOADER_START,
  });

  try {
    const response = yield axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${ACCESS_TOKEN}`,
    );

    // console.log('Saga response', response.data.features[2].place_name);

    yield put({
      type: types.SHOW_TOAST,
      payload: {
        type: TOAST_TYPE.SUCCESS,
        message: `Your location set to ${response.data.features[2].place_name}`,
      },
    });

    yield put({
      type: types.FETCH_LOCATION_SUCCESS,
      payload: response.data.features[2].place_name,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    console.log('Saga error => ', error);

    yield put({
      type: types.SHOW_TOAST,
      payload: {
        type: TOAST_TYPE.FAIL,
        message: 'Something happened Try Again!',
      },
    });

    yield put({
      type: types.FETCH_LOCATION_FAIL,
      payload: error,
    });

    yield put({
      type: types.LOADER_STOP,
    });
  }
}
