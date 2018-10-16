import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {Shop, ShopDTO} from '../../model/shop/shop';
import {Offer, OfferDTO} from '../../model/offer/offer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit {
  public shopDTO: ShopDTO;
  public offerDTOS: OfferDTO[];
  public offerDTOSnext: OfferDTO[];
  private initialOfferAmount = 54;
  private nextOffersAmount = 18;
  private loadingCatalog = false;
  private subscriptions: Array<any> = [];
  public amountPages: number;
  public p = 1;

  constructor(
    private catalogService: CatalogService, private route: ActivatedRoute) {
    const params: any = this.route.snapshot.params;
    this.offerDTOS = this.route.snapshot.data['offerDTOS'];
  }

  ngOnInit() {
    this.getShop();
    // this.getInitialShopOffers(this.initialOfferAmount);
    // this.get20ShopOffers();
  }

  private getShop() {
    this.subscriptions.push(this.catalogService.getShop().subscribe(
      result => {
        this.shopDTO = result;
        console.log(this.offerDTOS);
      },
      error => {
        this.handleError(error);
      }
    ));
  }

  private getInitialShopOffers(amount: number) {
    this.catalogService.getShopOffers(amount).subscribe(
      result => {
        this.offerDTOS = result;
        console.log(this.offerDTOS);
        this.calculateAmountPages();
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private getNextOffers() {
    this.catalogService.getShopOffers(this.nextOffersAmount).subscribe(
      result => {
        this.offerDTOSnext = result;
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
        console.log('Returned offers from backend: ' + this.offerDTOS);
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

  private calculateAmountPages() {
    this.amountPages = this.offerDTOS.length / this.nextOffersAmount;
  }
}

