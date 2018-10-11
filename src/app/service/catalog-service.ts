import {Injectable, NgModule} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';
import {SubscribeResultHandler, XhrBaseRequestOptions} from '../util/utils';
import set = Reflect.set;
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Offer, OfferDTO} from '../model/offer/offer';

@Injectable()
export class CatalogService {
  private baseUrl = 'http://localhost:8090/shop';
  private getShopUrl = '/getShop';
  private getShopOffersUrl = '/getShopOffers';
  private get20ShopOffersUrl = '/get20ShopOffers';
  private getOfferForIdUrl = '/getOfferById/';

  constructor(private http: HttpClient,
              private xhrBaseRequestOptions: XhrBaseRequestOptions,
              private subscribeResultHandler: SubscribeResultHandler) {
  }

  public getShop(): Observable<any> {
    const callUrl = this.baseUrl + this.getShopUrl;
    return this.http.get(callUrl);
  }

  public getShopOffers(amount: number): Observable<any> {
    const callUrl = this.baseUrl + this.getShopOffersUrl;
    return this.http.get(callUrl);
  }

  public get20ShopOffers(): Observable<any> {
    const callUrl = this.baseUrl + this.get20ShopOffersUrl;
    return this.http.get(callUrl);
  }

  public getOfferById(id: string): Observable<any> {
    const callUrl = this.baseUrl + this.getOfferForIdUrl + id;
    return this.http.get(callUrl);
  }

}
