import createSagaMiddleware from '@redux-saga/core';
import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: (option: any) => string | any[]) => [
  ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
  sagaMiddleware,
];

// const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
