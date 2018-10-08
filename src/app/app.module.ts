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
import {OfferinfoComponent} from './components/offerinfo/offerinfo.component';
import { CataogsectionComponent } from './components/cataogsection/cataogsection.component';
import { TimesectionComponent } from './components/timesection/timesection.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    OfferComponent,
    PictureComponent,
    OfferinfoComponent,
    CataogsectionComponent,
    TimesectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    UiModule,
  ],
  exports: [],
  providers: [CatalogService, CatalogComponent, XhrBaseRequestOptions, SubscribeResultHandler],
  bootstrap: [AppComponent]
})
export class AppModule {
}
