import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import auctionApi from '../../api/auctionApi';
import { goback } from '../../navigation/service';
import { Auction, CreateAuctionInput } from '../../types/auction';
import { DataResponse, initialPaginationParams } from '../../types/pagination';
import { auctionActions } from '../reducers/auctionReducer';

function* handleCreateAuction(action: PayloadAction<CreateAuctionInput>) {
  try {
    yield call(auctionApi.create, action.payload);
    yield put(auctionActions.createAuctionSuccess());
    yield put(auctionActions.getListAuction());
    goback();
  } catch (error: any) {
    yield put(auctionActions.createAuctionFailed());
  }
}

function* getListAuction() {
  try {
    const data: DataResponse<Auction> = yield call(
      auctionApi.listAuction,
      initialPaginationParams,
    );
    yield put(auctionActions.getListAuctionSuccess(data?.data));
  } catch (error: any) {
    yield put(auctionActions.getListAuctionFailed());
  }
}

export default function* auctionSaga() {
  yield takeLatest(auctionActions.createAuction.type, handleCreateAuction);
  yield takeLatest(auctionActions.getListAuction.type, getListAuction);
}
