import EncryptedStorage from 'react-native-encrypted-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import authReducer from './auth/slice';
import booksReducer from './books/slice';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  whitelist: ['auth'],
};

export const rootReducer = combineReducers({
  // update rootReducer
  auth: authReducer,
  books: booksReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
