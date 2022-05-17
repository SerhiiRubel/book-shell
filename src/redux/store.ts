import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';

import {persistedReducer} from './root-reducer';
import {rootSaga} from './root-saga';
import {persistStore} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
