import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppNavigationComponent } from './components/navigation/app.navigation';
import { AppMastheadComponent } from './components/masthead/app.masthead';
import { AppFooterComponent } from './components/footer/app.footer';

@NgModule({
  declarations: [
    AppNavigationComponent,
    AppMastheadComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppNavigationComponent, AppMastheadComponent, AppFooterComponent]
})
export class AppModule { }
