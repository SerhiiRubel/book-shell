import Toast from 'react-native-toast-message';
import {call, takeLatest} from 'redux-saga/effects';

import {logInFailure, signUpFailure} from '../auth/slice';
import {booksFailure} from '../books/slice';

export function* toastSaga({payload}: {payload: string}) {
  yield call(Toast.show, {
    type: 'error',
    text2: payload,
    position: 'bottom',
  });
}

export function* toastWatchSaga() {
  yield takeLatest(
    // @ts-ignore
    [logInFailure.type, signUpFailure.type, booksFailure.type],
    toastSaga,
  );
}
