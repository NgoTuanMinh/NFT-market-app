import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  dialog: dialogReducer,
});

export default rootReducer;
