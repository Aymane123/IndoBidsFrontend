import {Component, Inject, OnInit} from '@angular/core';
import {OfferDTO} from '../model/offer/offer';
import {CatalogService} from '../service/catalog-service';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  input: string;
  searchedOfferDTOs: OfferDTO[];

  constructor(  @Inject(DOCUMENT) private document: any,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private catalogService: CatalogService) { }

  ngOnInit() {
    console.log('test');
    const params: any = this.activatedRoute.snapshot.params;
    this.input = params.input;
    console.log('INPUT ' + this.input);
    this.getOffersBySearch();
  }

  private getOffersBySearch() {
    this.catalogService.getOffersBySearch(this.input).subscribe(
      result => {
        this.searchedOfferDTOs = result;
      },
      error => {
        this.handleError(error);
      }
    );
  }
  private handleError(error: any) {
    console.log(error as string);
  }
}
