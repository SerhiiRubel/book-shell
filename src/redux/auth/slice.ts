import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../store';
import {User} from '../../models';

interface AuthState {
  isSigneId: boolean;
  user: User | null;
  isLogInLoading: boolean;
  isSignUpLoading: boolean;
  logInError: string | null;
  signUpError: string | null;
}

const initialState: AuthState = {
  isSigneId: false,
  user: null,
  isLogInLoading: false,
  isSignUpLoading: false,
  logInError: null,
  signUpError: null,
};

export type RequestPayload = {
  username: string;
  password: string;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInRequest: (state, _: PayloadAction<RequestPayload>) => {
      state.isLogInLoading = true;
      state.logInError = null;
    },
    logInSuccess: (state, action: PayloadAction<{user: User}>) => {
      state.user = action.payload.user;
      state.isSigneId = true;
      state.isLogInLoading = false;
    },
    logInFailure: (state, action: PayloadAction<string>) => {
      state.isLogInLoading = false;
      state.logInError = action.payload;
    },
    signUpRequest: (state, _: PayloadAction<RequestPayload>) => {
      state.isSignUpLoading = true;
      state.signUpError = null;
    },
    signUpSuccess: (state, action: PayloadAction<{user: User}>) => {
      state.user = action.payload.user;
      state.isSigneId = true;
      state.isSignUpLoading = false;
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.isSignUpLoading = false;
      state.signUpError = action.payload;
    },
    logout: state => {
      state.user = null;
      state.isSigneId = false;
    },
  },
});

export const {
  logInRequest,
  logInSuccess,
  logInFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  logout,
} = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsSignedIn = (state: RootState) => state.auth.isSigneId;
export const selectIsLoginLoading = (state: RootState) =>
  state.auth.isLogInLoading;
export const selectIsSignUpLoading = (state: RootState) =>
  state.auth.isSignUpLoading;

export default authSlice.reducer;
