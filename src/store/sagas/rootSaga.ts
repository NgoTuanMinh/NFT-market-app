import { all } from '@redux-saga/core/effects';
import artworkSaga from './artworkSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([authSaga(), artworkSaga()]);
}
