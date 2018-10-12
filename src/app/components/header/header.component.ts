import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {OfferDTO} from '../../model/offer/offer';
import {CategoryDTO} from '../../model/shop/category';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public offerDTOs: OfferDTO[];
  public searchedOfferDTOs: OfferDTO[];
  public categoryDTOs: CategoryDTO[];
  subscription: Subscription;
  input: string;
  public data = {};

  @ViewChild('#searchBar') searchBarValue: ElementRef;

  constructor(private catalogService: CatalogService,
              private router: Router ) {

  }

  private getOffersBySearch(input: string) {
    console.log(input);
    this.router.navigate(['/searchResult/' + input]);
  }
  ngOnInit() {
    this.getCategories();
  }
  private handleError(error: any) {
    console.log(error as string);
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



}
