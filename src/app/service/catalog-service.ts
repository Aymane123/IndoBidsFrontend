import {Injectable, NgModule} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';
import {SubscribeResultHandler, XhrBaseRequestOptions} from '../util/utils';
import set = Reflect.set;
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

@Injectable()
export class CatalogService {
  private baseUrl = 'http://localhost:8090/shop';
  private getShopUrl = '/getShop';
  private getShopOffersUrl = '/getShopOffers';
  private get20ShopOffersUrl = '/get20ShopOffers';
  private getOfferForIdUrl = '/getOfferById/';
  private getCategoriesUrl = '/getCategories';
  private getSearchOffersUrl = '/getOffersBySearch/';
  private baseAmountOffers = 54;
  private nextAmountOffers = 18;

  constructor(private http: HttpClient,
              private xhrBaseRequestOptions: XhrBaseRequestOptions,
              private subscribeResultHandler: SubscribeResultHandler) {
  }

  public getShop(): Observable<any> {
    const callUrl = this.baseUrl + this.getShopUrl;
    return this.http.get(callUrl);
  }

  public getShopOffers(amount: number): Observable<any> {
    const callUrl = this.baseUrl + this.getShopOffersUrl + '/' + amount;
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

  public getCategories(): Observable<any> {
    const callUrl = this.baseUrl + this.getCategoriesUrl;
    return this.http.get(callUrl);
  }

  public getOffersBySearch(input: string): Observable<any> {
    const callUrl = this.baseUrl + this.getSearchOffersUrl + input;
    return this.http.get(callUrl);
  }

  public getInitialOfferAmount() {
    if (this.baseAmountOffers != null) {
      return this.baseAmountOffers;
    }
  }

  public getNextOfferAmount() {
    if (this.nextAmountOffers != null) {
      return this.nextAmountOffers;
    }
  }

}
