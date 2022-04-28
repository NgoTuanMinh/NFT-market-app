import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import artworkApi from '../../api/artworkApi';
import { goback } from '../../navigation/service';
import { Artwork, CreateArtworkInput } from '../../types/artwork';
import { DataResponse, initialPaginationParams } from '../../types/pagination';
import { artworkActions } from '../reducers/artworkReducer';

function* handleCreateArtwork(action: PayloadAction<CreateArtworkInput>) {
  try {    
    yield call(
      artworkApi.create,
      action.payload,
    );
    yield put(artworkActions.createArtworkSuccess());
    yield put(artworkActions.getListArtwork());
    goback();
  } catch (error: any) {
    yield put(artworkActions.createArtworkFailed());
  }
}

// function* handleLogout() {
//   yield call(clearUserData);
//   yield put(authActions.logoutSuccess());
//   navigate(screenName.LOGIN_SCREEN);
// }

function* getListArtwork() {
  try {
    const data: DataResponse<Artwork> = yield call(
      artworkApi.listArtworkOwner,
      initialPaginationParams
    );
    yield put(artworkActions.getListArtworkSuccess(data?.data));
  } catch (error: any) {
    yield put(artworkActions.getListArtworkFailed());
  }
}

export default function* artworkSaga() {
  yield takeLatest(artworkActions.createArtwork.type, handleCreateArtwork);
  yield takeLatest(artworkActions.getListArtwork.type, getListArtwork);
}
