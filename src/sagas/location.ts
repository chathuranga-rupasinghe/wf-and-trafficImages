import {takeLatest, put, all} from 'redux-saga/effects';

import { FETCH_LOCATIONS, FETCH_LOCATIONS_NOT_OK, FETCH_LOCATIONS_OK } from '../action-types';
import { fetchLocationsNotOk, fetchLocationsOk } from '../actions/location';
import { fetchLocationsApi, fetchTraficImagesApi } from '../api';
import {apiCall} from '../utils/fetch';
import { formatLocationData } from '../utils/formatter';


const location = function*({payload}:any) : any{
  const [locationResponse, trafficImagesResponse] = yield all([
    apiCall(fetchLocationsApi, {date_time: payload}),
    apiCall(fetchTraficImagesApi, {date_time: payload})
  ]);

  if (trafficImagesResponse.data.api_info.status === 'healthy' && locationResponse.data.api_info.status === 'healthy') {
   const formattedData = formatLocationData(trafficImagesResponse.data['items'][0]['cameras'], locationResponse.data);
   yield put(fetchLocationsOk(formattedData));
  } else {
    yield put(fetchLocationsNotOk());
  }
};

export function* locationSaga() {
  yield takeLatest(FETCH_LOCATIONS, location);
}
