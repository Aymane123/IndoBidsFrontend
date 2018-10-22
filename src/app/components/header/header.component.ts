import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CatalogService} from '../../service/catalog-service';
import {CategoryDTO} from '../../model/shop/category';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  input: string;
  public data = {};

  @ViewChild('#searchBar') searchBarValue: ElementRef;

  constructor(private catalogService: CatalogService,
              private router: Router) {

  }

  private getOffersBySearch(input: string) {
    console.log(input);
    this.router.navigate(['/search-result/' + input]);
  }

  ngOnInit() {

  }

  private handleError(error: any) {
    console.log(error as string);
  }

}
