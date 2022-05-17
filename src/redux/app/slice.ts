import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../store';

interface BooksState {
  isDarkMode: boolean;
}

const initialState: BooksState = {
  isDarkMode: false,
};

export type BookRequestAction = PayloadAction<{searchQuery: string}>;

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const {setDarkMode} = appSlice.actions;

export const selectDarkMode = (state: RootState) => state.app.isDarkMode;
export const selectIsInitialized = (state: RootState) =>
  state._persist.rehydrated;

export default appSlice.reducer;
