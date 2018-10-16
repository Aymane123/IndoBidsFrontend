import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CatalogService} from './catalog-service';
import {Observable} from 'rxjs';
import {OfferDTO} from '../model/offer/offer';


@Injectable()
export class CatalogResolverService implements Resolve<OfferDTO> {
  constructor(private catalogService: CatalogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OfferDTO> | Promise<OfferDTO> | OfferDTO {
    return  this.catalogService.getShopOffers(36);
  }

}
