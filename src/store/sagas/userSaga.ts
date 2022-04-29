import { call, put, takeLatest } from '@redux-saga/core/effects';
import userApi from '../../api/userrApi';
import { User } from '../../types/authentication';
import { saveUserData } from '../../utils/storage';
import { userActions } from '../reducers/userReducer';

// function* handleCreateAuction(action: PayloadAction<CreateAuctionInput>) {
//   try {    
//     yield call(
//       auctionApi.create,
//       action.payload,
//     );
//     yield put(auctionActions.createAuctionSuccess());
//     yield put(auctionActions.getListAuction());
//     goback();
//   } catch (error: any) {
//     yield put(auctionActions.createAuctionFailed());
//   }
// }

function* getUserInfo() {
  try {
    const data: User = yield call(
      userApi.getUserInfo,
      {relations: ["favouriteProduct", "userInformation"]}
    );
    saveUserData(JSON.stringify(data));
    yield put(userActions.getUserSuccess(data));
  } catch (error: any) {
    yield put(userActions.getUserFailed());
  }
}

export default function* userSaga() {
  // yield takeLatest(auctionActions.createAuction.type, handleCreateAuction);
  yield takeLatest(userActions.getUser.type, getUserInfo);
}
