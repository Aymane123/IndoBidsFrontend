import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../model/offer/offer';
import {Shop, ShopDTO} from '../../model/shop/shop';
import {isBoolean} from 'util';
import {CatalogComponent} from '../catalog/catalog.component';
import {CatalogService} from '../../service/catalog-service';

@Component({
  selector: 'app-detailtable',
  templateUrl: './detailtable.component.html',
  styleUrls: ['./detailtable.component.css']
})
export class DetailtableComponent implements OnInit {
  @Input()
  offer: OfferDTO;
  @Input()
  shop: ShopDTO;
  discountPercentage: string;
  discountPrice: string;
  availability: string;
  delivery: string;
  dollarDeliveryCost = '≥ 0 USD';
  deliveryCost: string;

  private subscriptions: Array<any> = [];

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.getAvailability();
    this.getDelivery();
    this.getDeliveryCost();
    this.getDiscountPercentage();
    this.getDiscountPrice();
    this.getShop();
  }

  private getAvailability() {
    if (this.offer.available = isBoolean(true)) {
      this.availability = 'Yes';
    } else {
      this.availability = 'No';
    }
  }

  private getDeliveryCost() {
    if (this.offer.available = this.dollarDeliveryCost) {
      this.deliveryCost = 'Yes';
    } else {
      this.deliveryCost = 'No';
    }
  }

  private getDelivery() {
    if (this.offer.delivery = isBoolean(true)) {
      this.delivery = 'Yes';
    } else {
      this.delivery = 'No';
    }
  }

  private getDiscountPercentage() {
    const priceDiscountPerc: number = (1 - (this.offer.price / this.offer.oldprice)) * 100;
    this.discountPercentage = priceDiscountPerc.toFixed(2);
  }

  private getDiscountPrice() {
    const priceDiscountPrice: number = this.offer.oldprice - this.offer.price;
    this.discountPrice = priceDiscountPrice.toFixed(2);
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

  private handleError(error: any) {
    console.log(error as string);
  }

}
