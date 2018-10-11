import {Component, OnInit} from '@angular/core';
import {CatalogService} from './service/catalog-service';
import {Shop} from './model/shop/shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private shop: Shop;
  private subscriptions: Array<any> = [];

  constructor(private catalogService: CatalogService) {
    this.subscriptions.push(catalogService.getShop().subscribe(
      activeShop => {
        this.shop = activeShop;
      }
    ));
  }
}

