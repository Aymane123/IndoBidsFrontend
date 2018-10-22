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

  public sortOptions = ['categoryId', 'price', 'discount'];
  public showOptions = [18, 36, 54];
  key: string = 'discount'; //set default
  reverse: boolean = false;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 18,
    currentPage: 1
  };

  sort(event) {
    if (event != null) {
      this.key = event.target.value;
      console.log(event.target.value);
      this.reverse = !this.reverse;
    }
  }

}
