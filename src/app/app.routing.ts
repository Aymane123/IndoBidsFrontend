import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CatalogComponent} from './components/catalog/catalog.component';
import {SearchResultComponent} from './search-result/search-result.component';

const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'searchResult/:input', component: SearchResultComponent},
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
