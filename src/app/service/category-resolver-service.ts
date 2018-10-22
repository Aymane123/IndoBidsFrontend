import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {OfferDTO} from '../model/offer/offer';
import {CatalogService} from './catalog-service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CategoryResolverService implements Resolve<OfferDTO> {
  constructor(private catalogService: CatalogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OfferDTO> | Promise<OfferDTO> | OfferDTO {
    return this.catalogService.getOffersByCategoryId(route.params.categoryId, this.catalogService.getAmount());
  }
}

