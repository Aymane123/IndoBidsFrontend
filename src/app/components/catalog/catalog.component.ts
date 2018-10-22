import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {Shop, ShopDTO} from '../../model/shop/shop';
import {Offer, OfferDTO} from '../../model/offer/offer';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PagerService} from '../../service/pager-service';
import {CategoryDTO} from '../../model/shop/category';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit {
  public shopDTO: ShopDTO;
  public offerDTOS: OfferDTO[];
  public categoryDTOS: CategoryDTO[];
  public initialOfferAmount = 180;
  private loadingCatalog = false;
  private subscriptions: Array<any> = [];
  public p = 1;

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private pagerService: PagerService,
    private router: Router) {
    const params: any = this.route.snapshot.params;
    this.offerDTOS = this.route.snapshot.data['offerDTOS'];
    this.shopDTO = this.route.snapshot.data['shopDTO'];
  }

  ngOnInit() {

  }

  private getShop() {
    this.subscriptions.push(this.catalogService.getShop().subscribe(
      result => {
        this.shopDTO = result;
      },
      error => {
        this.handleError(error);
      }
    ));
  }

  private getAllCategories() {
    this.catalogService.getCategories().subscribe(
      result => {
        this.categoryDTOS = result;
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private getInitialShopOffers(amount: number) {
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

  private handleError(error: any) {
    console.log(error as string);
    this.loadingCatalog = false;
  }
}

