import {all} from 'redux-saga/effects';

import {locationSaga} from './location'; 

export default function* root() {
    yield all([locationSaga()]);
  }
  