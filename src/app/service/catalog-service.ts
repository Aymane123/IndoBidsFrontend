import {Injectable, NgModule} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';
import {SubscribeResultHandler, XhrBaseRequestOptions} from '../util/utils';
import set = Reflect.set;
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

@Injectable()
export class CatalogService {
  private getShopNameUrl = '/getShopName/';
  private getShopUrl = '/getShop/';
  private baseUrl = 'http://localhost:8090/shop';

  constructor(private http: HttpClient,
              private xhrBaseRequestOptions: XhrBaseRequestOptions,
              private subscribeResultHandler: SubscribeResultHandler) {

  }

/*  public getCatalog(): Observable<any> {
    const callUrl = this.catalogRequestMapping;
    // @ts-ignore
    return this.http.get(callUrl, this.xhrBaseRequestOptions);
  }

  public getShopName(): Observable<any> {
    const callUrl = this.catalogRequestMapping + this.getShopNameUrl;
    return this.http.get(callUrl);
  }
*/
  public getShop(): Observable<any> {
    const callUrl = this.baseUrl + this.getShopUrl;
    return this.http.get(callUrl);
  }

/*  public getShopTest(): Observable<any> {
    const callUrl = this.baseUrl + this.getShopTestUrl;
    return this.http.get(callUrl);
  }*/
}
