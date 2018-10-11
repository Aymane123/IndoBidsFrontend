import {Component, Inject, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../model/offer/offer';
import {Router, RouterModule, Routes} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {ShopDTO} from '../../model/shop/shop';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input()
  offer: OfferDTO;
  @Input()
  shop: ShopDTO;

  priceDifference: number;
  @Input()
  pictureURL: String;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router) {
  }

  ngOnInit() {
    this.calculatePriceDifference();
  }

  calculatePriceDifference() {
    const priceDiscount: number = (1 - (this.offer.price / this.offer.oldprice)) * 100;
    this.priceDifference = Math.round(priceDiscount);
  }

  private setPictureUrl() {
    this.pictureURL = this.offer.picturesUrls[0];
  }

  goToShopUrl(): void {
    // this.router.navigate(['/redirect']);
    this.goToUrl(this.shop.url);
  }

  goToOfferUrl(): void {
    // this.router.navigate(['/redirect']);
    this.goToUrl(this.offer.url);
  }

  goToOfferDetails(id: string): void {
    this.router.navigate(['/details/' + id]);
  }

  goToOfferDetailsTest(): void {
    this.router.navigate(['/details']);
  }

  goToUrl(url: string) {
    window.open(url, '_blank');
  }
}
