import {Injectable, NgModule} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';
import {SubscribeResultHandler, XhrBaseRequestOptions} from '../util/utils';
import set = Reflect.set;
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Offer} from '../model/offer/offer';

@Injectable()
export class CatalogService {
  private baseUrl = 'http://localhost:8090/shop';
  private getShopUrl = '/getShop/';
  private getShopOffersUrl: '/getShopOffersUrl/';

  constructor(private http: HttpClient,
              private xhrBaseRequestOptions: XhrBaseRequestOptions,
              private subscribeResultHandler: SubscribeResultHandler) {
  }

  public getShop(): Observable<any> {
    const callUrl = this.baseUrl + this.getShopUrl;
    return this.http.get(callUrl);
  }

  public getShopOffers(): Observable<any> {
    const callUrl = this.baseUrl + this.getShopOffersUrl;
    return this.http.get(callUrl);
  }


}
