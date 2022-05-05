import { combineReducers } from '@reduxjs/toolkit';
import artworkReducer from './artworkReducer';
import auctionReducer from './auctionReducer';
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import snackbarReducer from './snackbarReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  dialog: dialogReducer,
  artwork: artworkReducer,
  auction: auctionReducer,
  user: userReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
