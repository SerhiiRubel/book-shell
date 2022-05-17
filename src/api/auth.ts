import {ApiResponse} from 'apisauce';

import {httpService} from '../services';
import {apiUrls} from './api-urls';
import {ApiError, User} from '../models';

export type Params = {
  username: string;
  password: string;
};

export const login = (params: Params) =>
  httpService.post<ApiResponse<User, ApiError>>(apiUrls.logIn, params);

export const signUp = (params: Params) =>
  httpService.post<ApiResponse<User, ApiError>>(apiUrls.signUp, params);
