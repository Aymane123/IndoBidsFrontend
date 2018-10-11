import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {OfferDTO} from '../../model/offer/offer';
import {CategoryDTO} from '../../model/shop/category';
import {StorageService} from '../../service/storage-service';
import {Subscription} from 'rxjs';

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
              private storageService: StorageService) {
    this.storageService.myMethod$.subscribe((data) => {
        this.offerDTOs = data; // And he have data here too!
      }
    );

  }

  searchOffers(input: string) {
    this.input = input;
    console.log(this.offerDTOs.length);
    alert(this.offerDTOs.length);
    for (const entry of this.offerDTOs) {
      if (entry.name.indexOf(this.input.toString()) >= 0) {
        this.searchedOfferDTOs.push(entry);
      }
    }
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
