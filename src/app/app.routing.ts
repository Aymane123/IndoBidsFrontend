import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {OfferdetailComponent} from './components/offerdetail/offerdetail.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {DetailtableComponent} from './components/detailtable/detailtable.component';
import {CatalogResolverService} from './service/catalog-resolver-service';
import {SearchEmptyComponent} from './components/search-empty/search-empty.component';
import {SearchResultResolverService} from './service/search-result-resolver-service';
import {CategoryResolverService} from './service/category-resolver-service';
import {ShopResolverService} from './service/shop-resolver-service';
import {CatalogFilterCategoryComponent} from './components/catalog-filter-category/catalog-filter-category.component';

const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'redirect', component: RedirectComponent},
  {
    path: 'catalog', component: CatalogComponent, resolve: {
      offerDTOS: CatalogResolverService,
      shopDTO: ShopResolverService
    }
  },
  {
    path: 'catalog-filtered-category/:categoryId/:amount',
    component: CatalogFilterCategoryComponent,
    resolve: {filteredOfferDTOS: CategoryResolverService}
  },
  {
    path: 'search-result/:selectedCategoryId/:input',
    component: SearchResultComponent,
    resolve: {searchedOffers: SearchResultResolverService}
  },
  {path: 'search-empty', component: SearchEmptyComponent},
  {path: 'details/:id', component: OfferdetailComponent},
  {path: 'details/:id/detailtable', component: DetailtableComponent},
  {path: 'search-result/:input', component: SearchResultComponent, resolve: {searchedOffers: SearchResultResolverService}},
  {path: '**', component: PageNotFoundComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
