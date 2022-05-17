import {takeLatest, select} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/es/constants';

import {selectUser} from '../auth/slice';
import {httpService} from '../../services';

export function* initSaga() {
  // @ts-ignore
  const user = yield select(selectUser);

  if (user?.token) {
    httpService.setAuthHeader(user.token);
  }
}

export function* appWatchSaga() {
  yield takeLatest(REHYDRATE, initSaga);
}
