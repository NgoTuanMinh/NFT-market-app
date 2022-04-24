import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginInput, LoginOutput } from '../../types/authentication';

export interface Session {
  accessToken: string;
  refreshToken: string;
  expireTime: number;
}

export interface AuthState {
  loading: boolean;
  session: Session;
}

const initialState: AuthState = {
  loading: false,
  session: {
    accessToken: '',
    refreshToken: '',
    expireTime: 0,
  },
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login(state, action: PayloadAction<LoginInput>) {
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<LoginOutput>) {
      state.loading = false;
      state.session = action.payload;
    },
    loginFailed(state) {
      state.loading = false;
    },
    logout(state) {
      state.loading = false;
    },
  },
});
// Action
export const authActions = authSlice.actions;

// Selector
export const selectLoadingLogin = (state: any) => state.authentication.loading;
export const selectSessionLogin = (state: any) => state.authentication.session;

// Reducers
const authReducer = authSlice.reducer;
export default authReducer;
