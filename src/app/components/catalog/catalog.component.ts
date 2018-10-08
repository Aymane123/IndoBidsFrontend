import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {Shop, ShopDTO} from '../../model/shop/shop';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit {
  shopTitle = '';
  private shop: Shop;
  private shopDTO: ShopDTO;
  private loadingCatalog = false;
  private subscriptions: Array<any> = [];

  constructor(
    private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.getShop();
  }

  private handleError(error: any) {
    console.log(error as string);
    this.loadingCatalog = false;
  }

  private getShop() {
    this.subscriptions.push(this.catalogService.getShop().subscribe(
      result => {
        this.shopDTO = result;
        this.shopTitle = this.shopDTO.name;
        console.log(this.shopDTO);
      },
      error => {
        this.handleError(error);
      }
    ));
  }
}

