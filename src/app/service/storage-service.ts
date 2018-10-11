import { Injectable } from '@angular/core';
import {OfferDTO} from '../model/offer/offer';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class StorageService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);
  }


  // private subject = new Subject<any>();
  //
  // constructor() {
  // }
  //
  // public getOfferDTOs(): Observable<any> {
  //   return this.subject.asObservable();
  // }
  //
  // public setOfferDTOs(offerDTOs: OfferDTO[]): void {
  //   this.subject.next(offerDTOs);
  // }
}
