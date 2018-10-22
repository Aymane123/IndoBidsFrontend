import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CategoryDTO} from '../../model/shop/category';
import {OfferDTO} from '../../model/offer/offer';
import {ShopDTO} from '../../model/shop/shop';
import {CatalogService} from '../../service/catalog-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalog-filter',
  templateUrl: './catalog-filter.component.html',
  styleUrls: ['./catalog-filter.component.css']
})
export class CatalogFilterComponent implements OnInit {
  @Input() amount = 180;
  @Input('offerDTOS') offerDTOS: OfferDTO[] = [];
  @Input('shopDTO') shopDTO: ShopDTO;
  // @ViewChild('#selectedCategoryOption') filterValue: ElementRef;

  public categoryDTOs: CategoryDTO[];
  public sortOptions = ['Category', 'Price', 'Discount'];
  public showOptions = [18, 36, 54];
  private itemsPerPage = 0;
  public categoryId: string;

  constructor(private catalogService: CatalogService, private router: Router) {
    this.getCategories();
  }

  ngOnInit() {

  }

  private getCategories() {
    this.catalogService.getCategories().subscribe(
      result => {
        this.categoryDTOs = result;
        console.log(this.categoryDTOs);
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any) {
    console.log(error as string);
  }

  public onChangeAmount(event): void {
    if (event != null) {
      console.log(event.target.value);
    }
  }

  public onChangeCategory(event): void {
    this.categoryId = event.target.value;
    this.catalogService.setSelectedCategoryId(this.categoryId);
    this.amount = this.catalogService.getAmount();
    console.log(this.categoryId);
    this.router.navigate(['/catalog-filtered-category/' + this.categoryId + '/' + this.amount]);
  }

  public onChangeSort(event): void {
    if (event != null) {
      console.log(event.target.value);
    }
  }
}
