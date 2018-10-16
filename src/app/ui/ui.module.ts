import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from '../components/layout/layout.component';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import {NavigatorComponent} from '../components/navigator/navigator.component';
import {NewsletterComponent} from '../components/newsletter/newsletter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, NavigatorComponent, NewsletterComponent],
  exports: [LayoutComponent]
})
export class UiModule {
}
