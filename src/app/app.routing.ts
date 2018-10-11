import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {OfferdetailComponent} from './components/offerdetail/offerdetail.component';
import {RedirectComponent} from './components/redirect/redirect.component';

const routes: Routes = [
  {path: 'details', component: OfferdetailComponent},
  {path: 'details/:id', component: OfferdetailComponent},
  {path: 'redirect', component: RedirectComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
