import {ApiResponse} from 'apisauce';
import {call, put} from 'redux-saga/effects';
import {ActionCreator} from '@reduxjs/toolkit';

import {ApiError} from '../models';

export function* createSaga(
  successActionCreator: ActionCreator<any>,
  failureActionCreator: ActionCreator<any>,
  apiFn: () => ApiResponse<any, ApiError>,
  apiFnParams = {},
  successCb: (data: any) => void,
) {
  try {
    // @ts-ignore
    const response = yield call(apiFn, apiFnParams);

    if (response.ok) {
      yield put(successActionCreator(response.data));
      if (successCb) {
        successCb(response.data);
      }
    } else {
      yield put(failureActionCreator(response.data.message));
    }
  } catch (error: any) {
    yield put(failureActionCreator(error.message));
  }
}
