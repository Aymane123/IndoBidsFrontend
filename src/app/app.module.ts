import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {OfferComponent} from './components/offer/offer.component';
import {CatalogService} from './service/catalog-service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SubscribeResultHandler, XhrBaseRequestOptions} from './util/utils';
import {UiModule} from './ui/ui.module';
import {PictureComponent} from './components/picture/picture.component';
import {CataogsectionComponent} from './components/categoriesSection/cataogsection.component';
import {TimesectionComponent} from './components/timesection/timesection.component';
import {OfferdetailComponent} from './components/offerdetail/offerdetail.component';
import {routingModule} from './app.routing';
import {RedirectComponent} from './components/redirect/redirect.component';
import {DetailtableComponent} from './components/detailtable/detailtable.component';
import {SortingsectionComponent} from './components/sortingsection/sortingsection.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {CatalogResolverService} from './service/catalog-resolver-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchEmptyComponent } from './components/search-empty/search-empty.component';
import {SearchResultResolverService} from './service/search-result-resolver-service';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    OfferComponent,
    PictureComponent,
    CataogsectionComponent,
    TimesectionComponent,
    OfferdetailComponent,
    RedirectComponent,
    DetailtableComponent,
    SortingsectionComponent,
    PageNotFoundComponent,
    SearchResultComponent,
    SearchEmptyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    UiModule,
    routingModule,
    NgxPaginationModule
  ],
  exports: [],
  providers: [CatalogService, CatalogComponent, XhrBaseRequestOptions, SubscribeResultHandler, CatalogResolverService, SearchResultResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
