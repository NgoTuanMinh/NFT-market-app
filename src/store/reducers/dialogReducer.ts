import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface DialogState {
  visible: boolean;
  payload?: PayloadState;
}

export interface PayloadState {
  onSubmit?: (input?: any) => void;
  content?: {
    title?: string;
    content?: string;
    titleSubmit?: string;
  }
}

const initialState: DialogState = {
  visible: false,
  payload: undefined,
};

const dialogSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    showDialog(state, action: PayloadAction<PayloadState>) {
      state.visible = true;
      state.payload = action.payload;
    },
    hideDialog(state) {
      state.visible = false
    }
  },
});
// Action
export const dialogActions = dialogSlice.actions;

// Selector
export const selectVisibleDialog = (state: RootState) => state.dialog.visible;
export const selectOnSubmitDialog = (state: RootState) => state?.dialog?.payload?.onSubmit;
export const selectContentDialog = (state: RootState) => state?.dialog?.payload?.content;

// Reducers
const dialogReducer = dialogSlice.reducer;
export default dialogReducer;
