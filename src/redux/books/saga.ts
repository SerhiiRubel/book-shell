import {call, debounce} from 'redux-saga/effects';

import {
  booksRequest,
  booksSuccess,
  booksFailure,
  BookRequestAction,
} from './slice';
import {createSaga} from '../common';
import {api} from '../../api';

export function* booksSaga({payload}: BookRequestAction) {
  // @ts-ignore
  yield call(createSaga, booksSuccess, booksFailure, api.getBooks, payload);
}

export function* booksWatchSaga() {
  // @ts-ignore
  yield debounce(600, booksRequest.type, booksSaga);
}
