import {PayloadAction} from '@reduxjs/toolkit';
import {takeLatest, call} from 'redux-saga/effects';

import {
  logInFailure,
  logInRequest,
  logInSuccess,
  logout,
  RequestPayload,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
} from './slice';
import {createSaga} from '../common';
import {api} from '../../api';
import {httpService} from '../../services';
import {User} from '../../models';

const successCb = (data: {user: User}) =>
  httpService.setAuthHeader(data.user.token);

export function* loginSaga({
  payload,
}: {
  payload: PayloadAction<RequestPayload>;
}) {
  yield call(
    // @ts-ignore
    createSaga,
    logInSuccess,
    logInFailure,
    api.login,
    payload,
    successCb,
  );
}

export function* signUpSaga({
  payload,
}: {
  payload: PayloadAction<RequestPayload>;
}) {
  yield call(
    // @ts-ignore
    createSaga,
    signUpSuccess,
    signUpFailure,
    api.signUp,
    payload,
    successCb,
  );
}

export function* logoutSaga() {
  yield call(httpService.removeAuthHeader);
}

export function* authWatchSaga() {
  // @ts-ignore
  yield takeLatest(logInRequest.type, loginSaga);
  // @ts-ignore
  yield takeLatest(signUpRequest.type, signUpSaga);
  yield takeLatest(logout.type, logoutSaga);
}
