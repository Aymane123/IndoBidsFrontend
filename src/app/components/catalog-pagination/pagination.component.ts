import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {OfferDTO} from '../../model/offer/offer';
import {ShopDTO} from '../../model/shop/shop';
import {CategoryDTO} from '../../model/shop/category';
import {CatalogService} from '../../service/catalog-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalog-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

  @Input('offerDTOS') offerDTOS: OfferDTO[] = [];
  @Input('shopDTO') shopDTO: ShopDTO;

  public categoryId: string;

  public sortOptions = ['Discount', 'Price', 'Category'];
  key: string = 'discount'; //set default
  reverse: boolean = true;

  constructor(private catalogService: CatalogService) {

  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 18,
    currentPage: 1
  };

  sort(value: string) {
    if (value != null) {
      if (value == 'Price') {
        this.key = 'price';
      }
      if (value == 'Category') {
        this.key = 'categoryId';
      }
      if (value == 'Discount') {
        this.key = 'discount';
      }
    }
  }

  setAscending() {
    this.reverse = false;
    this.sort(this.key);
  }

  setDescending() {
    this.reverse = true;
    this.sort(this.key);
  }

  showCategoryOffers($event) {

  }


  private handleError(error: any) {
    console.log(error as string);
  }

}
