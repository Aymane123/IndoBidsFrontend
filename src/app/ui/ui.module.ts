import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {NewsletterComponent} from './newsletter/newsletter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, NavigatorComponent, NewsletterComponent],
  exports: [LayoutComponent]
})
export class UiModule {
}
