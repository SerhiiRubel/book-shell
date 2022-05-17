import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../store';
import {Book} from '../../models';

interface BooksState {
  books: Book[] | null;
  isBooksLoading: boolean;
  booksError: string | null;
}

const initialState: BooksState = {
  books: null,
  isBooksLoading: false,
  booksError: null,
};

export type BookRequestAction = PayloadAction<{searchQuery: string}>;

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksRequest: (state, _: BookRequestAction) => {
      state.isBooksLoading = true;
      state.booksError = null;
    },
    booksSuccess: (state, action: PayloadAction<{books: Book[]}>) => {
      state.books = action.payload.books;
      state.isBooksLoading = false;
    },
    booksFailure: (state, action: PayloadAction<string>) => {
      state.isBooksLoading = false;
      state.booksError = action.payload;
    },
  },
});

export const {booksRequest, booksSuccess, booksFailure} = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books.books;
export const selectIsBooksLoading = (state: RootState) =>
  state.books.isBooksLoading;

export default booksSlice.reducer;
