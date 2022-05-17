import {httpService} from '../services';
import {apiUrls} from './api-urls';
import {ApiResponse} from 'apisauce';
import {ApiError, Book} from '../models';

export const getBooks = ({searchQuery = ''}) =>
  httpService.get<ApiResponse<Book[], ApiError>>(apiUrls.books, {
    q: searchQuery,
  });
