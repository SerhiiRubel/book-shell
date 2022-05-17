import * as auth from './auth';
import * as books from './books';

export const api = {
  ...auth,
  ...books,
};
