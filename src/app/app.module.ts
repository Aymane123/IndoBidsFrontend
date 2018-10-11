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
import {CataogsectionComponent} from './components/cataogsection/cataogsection.component';
import {TimesectionComponent} from './components/timesection/timesection.component';
import {OfferdetailComponent} from './components/offerdetail/offerdetail.component';
import {routingModule} from './app.routing';
import { RedirectComponent } from './components/redirect/redirect.component';
import {Router} from '@angular/router';
import {DetailtableComponent} from './components/detailtable/detailtable.component';
import { SortingsectionComponent } from './components/sortingsection/sortingsection.component';


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
    SortingsectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    UiModule,
    routingModule
  ],
  exports: [],
  providers: [CatalogService, CatalogComponent, XhrBaseRequestOptions, SubscribeResultHandler],
  bootstrap: [AppComponent]
})
export class AppModule {
}
