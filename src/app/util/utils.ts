import {BaseRequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class XhrBaseRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
  }
}

@Injectable()
export class SubscribeResultHandler {
  handleResponse(res: Response) {
    let body;
    if (res.text()) { // workaround for empty responses
      body = res.json();
    }
    return body || {};
  }

  handleError(error: any) {
    const errMsg: string = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
