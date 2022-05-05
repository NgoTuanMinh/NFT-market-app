import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface SnackbarState {
  content?: string;
}

const initialState: SnackbarState = {
  content: '',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: initialState,
  reducers: {
    showSnackbar(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    hideSnackbar(state) {
      state.content = undefined;
    },
  },
});
// Action
export const snackbarActions = snackbarSlice.actions;

// Selector
export const selectVisibleSnackbar = (state: RootState) => state?.snackbar?.content;

// Reducers
const snackbarReducer = snackbarSlice.reducer;
export default snackbarReducer;
