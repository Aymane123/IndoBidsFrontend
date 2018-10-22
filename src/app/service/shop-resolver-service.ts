import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {OfferDTO} from '../model/offer/offer';
import {CatalogService} from './catalog-service';
import {Observable} from 'rxjs';
import {Shop, ShopDTO} from '../model/shop/shop';

@Injectable()
export class ShopResolverService implements Resolve<ShopDTO> {
  constructor(private catalogService: CatalogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShopDTO> | Promise<Shop> | ShopDTO {
    return this.catalogService.getShop();
  }
}
