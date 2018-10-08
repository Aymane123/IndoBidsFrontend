import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {Shop, ShopDTO} from '../../model/shop/shop';
import {Offer} from '../../model/offer/offer';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit {
  public shopDTO: ShopDTO;
  public offers: Offer[];
  private loadingCatalog = false;
  private subscriptions: Array<any> = [];

  constructor(
    private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.getShop();
    this.getShopOffers();
  }

  private handleError(error: any) {
    console.log(error as string);
    this.loadingCatalog = false;
  }

  private getShop() {
    this.subscriptions.push(this.catalogService.getShop().subscribe(
      result => {
        this.shopDTO = result;
        console.log(this.shopDTO);
      },
      error => {
        this.handleError(error);
      }
    ));
  }

  private getShopOffers() {
    this.subscriptions.push(this.catalogService.getShopOffers().subscribe(
      result => {
        this.offers = result;
      },
      error => {
        this.handleError(error);
      }
    ));
  }
}

