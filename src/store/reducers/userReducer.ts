import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/authentication';

export interface UserState {
  loading: boolean;
  user: User | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // createAuction(state, action: PayloadAction<CreateAuctionInput>) {
    //   state.loading = true;
    // },
    // createAuctionSuccess(state) {
    //   state.loading = false;
    // },
    // createAuctionFailed(state) {
    //   state.loading = false;
    // },
    getUser(state) {
      state.loading = true;
    },
    getUserSuccess(state, action: PayloadAction<User>) {
      state.loading = true;
      state.user = action.payload;
    },
    getUserFailed(state) {
      state.loading = false;
    },
  },
});
// Action
export const userActions = userSlice.actions;

// Selector
export const selectLoadingUser = (state: any) => state.user.loading;
export const selectUser = (state: any) => state.user.user;

// Reducers
const userReducer = userSlice.reducer;
export default userReducer;
