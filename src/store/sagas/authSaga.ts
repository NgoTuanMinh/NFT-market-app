import { takeLatest, call, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { Platform } from 'react-native';
import authenticationApi from '../../api/authenApi';
import { navigate } from '../../navigation/service';
import { LoginInput, LoginOutput } from '../../types/authentication';
import screenName from '../../utils/screenName';
import { clearUserData, saveAccessToken, saveRefreshToken } from '../../utils/storage';
import { authActions } from '../reducers/authReducer';
import { userActions } from '../reducers/userReducer';

function* handleLogin(action: PayloadAction<LoginInput>) {
  try {
    const response: LoginOutput = yield call(
      authenticationApi.login,
      action.payload,
    );
    saveAccessToken(response?.accessToken);
    saveRefreshToken(response?.refreshToken);
    yield put(authActions.loginSuccess(response));
    yield put(userActions.getUser());
    navigate(screenName.HOME_SCREEN);
  } catch (error: any) {
    yield put(authActions.loginFailed());
  }
}

function* handleLogout() {
  yield call(clearUserData);
  yield put(authActions.logoutSuccess());
  Platform.OS !== 'ios' && navigate(screenName.HOME_SCREEN);
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.logout.type, handleLogout);
}
