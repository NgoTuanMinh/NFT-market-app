import { combineReducers } from '@reduxjs/toolkit';
import artworkReducer from './artworkReducer';
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  dialog: dialogReducer,
  artwork: artworkReducer,
});

export default rootReducer;
