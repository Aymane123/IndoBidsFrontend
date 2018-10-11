import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {Shop, ShopDTO} from '../../model/shop/shop';
import {Offer, OfferDTO} from '../../model/offer/offer';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit {
  public shopDTO: ShopDTO;
  public offerDTOS: OfferDTO[];
  private initialOfferAmount = 20;
  private loadingCatalog = false;
  private subscriptions: Array<any> = [];

  constructor(
    private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.getShop();
    // this.getShopOffers(this.initialOfferAmount);
    this.get20ShopOffers();
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

  private getShopOffers(amount: number) {
    this.catalogService.getShopOffers(amount).subscribe(
      result => {
        this.offerDTOS = result;
        console.log(this.offerDTOS);
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private get20ShopOffers() {
    this.catalogService.get20ShopOffers().subscribe(
      result => {
        this.offerDTOS = result;
        console.log(this.offerDTOS);
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any) {
    console.log(error as string);
    this.loadingCatalog = false;
  }

}

