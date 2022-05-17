import {ApisauceInstance, create} from 'apisauce';

const baseURL = 'http://104.248.26.141:3000/api';

class HTTPService {
  static AUTH_HEADER_KEY = 'Authorization';
  private _instance: ApisauceInstance;

  constructor() {
    this._instance = create({
      baseURL,
      timeout: 10000,
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      responseType: 'text',
    });
  }

  get<T>(url: string, params = {}) {
    return this._instance.get<T>(url, params);
  }

  post<T>(url: string, data: Object) {
    return this._instance.post<T>(url, JSON.stringify(data));
  }

  setAuthHeader(token: String) {
    this._instance.setHeader(HTTPService.AUTH_HEADER_KEY, `Bearer ${token}`);
  }

  removeAuthHeader = () => {
    this._instance.deleteHeader(HTTPService.AUTH_HEADER_KEY);
  };
}

export const httpService = new HTTPService();
