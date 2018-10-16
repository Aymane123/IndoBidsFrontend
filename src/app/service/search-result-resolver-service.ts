import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {OfferDTO} from '../model/offer/offer';
import {Observable} from 'rxjs';
import {CatalogService} from './catalog-service';
import {Injectable} from '@angular/core';

@Injectable()
export class SearchResultResolverService implements Resolve<OfferDTO[]> {

  constructor(private catalogService: CatalogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OfferDTO[]> | Promise<OfferDTO[]> | OfferDTO[] {
    return this.catalogService.getOffersBySearch(route.params.input);
  }

}
