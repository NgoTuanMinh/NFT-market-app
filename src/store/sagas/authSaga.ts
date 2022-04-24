import { takeLatest, call, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import authenticationApi from '../../api/authenApi';
import { LoginInput, LoginOutput } from '../../types/authentication';
import { saveAccessToken, saveRefreshToken } from '../../utils/storage';
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
  } catch (error: any) {
    yield put(authActions.loginFailed());
  }
}

// function* handleLogout() {
//   localStorage.removeItem('access_token');
//   yield put(push('/login'));
// }

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
}
