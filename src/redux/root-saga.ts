import {all} from 'redux-saga/effects';

import {appWatchSaga} from './app/saga';
import {authWatchSaga} from './auth/saga';
import {booksWatchSaga} from './books/saga';
import {toastWatchSaga} from './toast/sagas';

export function* rootSaga() {
  yield all([
    appWatchSaga(),
    authWatchSaga(),
    booksWatchSaga(),
    toastWatchSaga(),
  ]);
}
