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

  public categoryDTOS: CategoryDTO[];
  public categoryId: string;

  constructor(private catalogService: CatalogService, private router: Router) {
    this.getCategories();
  }

  ngOnInit() {

  }

  private getCategories() {
    this.catalogService.getCategories().subscribe(
      result => {
        this.categoryDTOS = result;
        console.log(this.categoryDTOS);
      },
      error => {
        this.handleError(error);
      }
    );
  }


  public onChangeCategory(event): void {
    this.categoryId = '';
    this.categoryId = event.target.value;
    this.catalogService.getOffersByCategoryId(this.categoryId).subscribe(
      result => {
        this.categoryDTOS = result;
        console.log(this.categoryDTOS);
      },
      error => {
        this.handleError(error);
      }
    );



    this.catalogService.setSelectedCategoryId(this.categoryId);
    this.amount = this.catalogService.getAmount();
    console.log(this.categoryId);
    this.router.navigate(['/catalog-filtered-category/' + this.categoryId + '/' + this.amount]);

  }

  private handleError(error: any) {
    console.log(error as string);
  }

}
