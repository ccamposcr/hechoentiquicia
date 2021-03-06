import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppNavigationComponent } from './components/navigation/app.navigation';
import { AppMastheadComponent } from './components/masthead/app.masthead';
import { AppFooterComponent } from './components/footer/app.footer';
import { AppSocialShareComponent } from './components/social-share/app.social-share';
import { AppServicesComponent } from './components/services/app.services';
import { AppAboutUsComponent } from './components/about-us/app.about-us';

@NgModule({
  declarations: [
    AppNavigationComponent,
    AppMastheadComponent,
    AppFooterComponent,
    AppSocialShareComponent,
    AppServicesComponent,
    AppAboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppNavigationComponent, AppMastheadComponent, AppFooterComponent]
})
export class AppModule { }
