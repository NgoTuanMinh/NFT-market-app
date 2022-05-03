import { all } from '@redux-saga/core/effects';
import artworkSaga from './artworkSaga';
import auctionSaga from './auctionSaga';
import authSaga from './authSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([authSaga(), artworkSaga(), auctionSaga(), userSaga()]);
}
