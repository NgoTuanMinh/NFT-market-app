import { takeLatest, call, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import authenticationApi from '../../api/authenApi';
import { navigate } from '../../navigation/service';
import { LoginInput, LoginOutput } from '../../types/authentication';
import screenName from '../../utils/screenName';
import { clearUserData, saveAccessToken, saveRefreshToken } from '../../utils/storage';
import { authActions } from '../reducers/authReducer';

function* handleLogin(action: PayloadAction<LoginInput>) {
  try {
    const response: LoginOutput = yield call(
      authenticationApi.login,
      action.payload,
    );
    saveAccessToken(response?.accessToken);
    saveRefreshToken(response?.refreshToken);
    yield put(authActions.loginSuccess(response));
    navigate(screenName.HOME_SCREEN);
  } catch (error: any) {
    yield put(authActions.loginFailed());
  }
}

function* handleLogout() {
  yield call(clearUserData);
  yield put(authActions.logoutSuccess());
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.logout.type, handleLogout);
}
