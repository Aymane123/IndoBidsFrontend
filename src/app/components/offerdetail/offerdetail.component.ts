import {Component, Inject, Input, OnInit} from '@angular/core';
import {Offer, OfferDTO} from '../../model/offer/offer';
import {Shop, ShopDTO} from '../../model/shop/shop';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogService} from '../../service/catalog-service';

@Component({
  selector: 'app-offerdetail',
  templateUrl: './offerdetail.component.html',
  styleUrls: ['./offerdetail.component.css']
})
export class OfferdetailComponent implements OnInit {
  @Input()
  offerId: string;
  offer: OfferDTO;
  shop: ShopDTO;
  imageUrlToShow: string;
  priceDifference: number;
  private subscriptions: Array<any> = [];
  private loadingDetails = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.getShop();
    const params: any = this.activatedRoute.snapshot.params;
    this.offerId = params.id;
    this.getOfferById(this.offerId);
    this.calculatePriceDifference();
  }

  private getOfferById(id: string) {
    this.catalogService.getOfferById(id).subscribe(
      result => {
        this.offer = result;
        this.imageUrlToShow = this.offer.picturesUrls[0];
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private getShop() {
    this.subscriptions.push(this.catalogService.getShop().subscribe(
      result => {
        this.shop = result;
      },
      error => {
        this.handleError(error);
      }
    ));
  }

  private calculatePriceDifference() {
    const priceDiscount: number = (1 - (this.offer.price / this.offer.oldprice)) * 100;
    this.priceDifference = Math.round(priceDiscount);
  }

  changeImage(imageUrl: string) {
    if (imageUrl != null) {
      this.imageUrlToShow = imageUrl;
    }
  }

  goToUrl(url: string) {
    window.open(url, '_blank');
  }

  private handleError(error: any) {
    console.log(error as string);
    this.loadingDetails = false;
  }

}

