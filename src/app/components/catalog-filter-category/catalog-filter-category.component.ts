import {Component, Inject, OnInit} from '@angular/core';
import {OfferDTO} from '../../model/offer/offer';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogService} from '../../service/catalog-service';

@Component({
  selector: 'app-catalog-filter-category',
  templateUrl: './catalog-filter-category.component.html',
  styleUrls: ['./catalog-filter-category.component.css']
})
export class CatalogFilterCategoryComponent implements OnInit {
  filteredOfferDTOS: OfferDTO[];
  categoryId;
  public p = 1;

  constructor(@Inject(DOCUMENT) private document: any,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private catalogService: CatalogService) {
    activatedRoute.params.subscribe(val => {
      const params: any = this.activatedRoute.snapshot.params;
      this.categoryId = params.categoryId;
      console.log(this.categoryId);
      this.filteredOfferDTOS = this.activatedRoute.snapshot.data['filteredOfferDTOS'];
    });
  }

  ngOnInit() {
  }

}
