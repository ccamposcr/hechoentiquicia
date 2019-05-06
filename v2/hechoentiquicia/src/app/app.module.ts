import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppNavigationComponent } from './components/navigation/app.navigation';
import { AppMastheadComponent } from './components/masthead/app.masthead';

@NgModule({
  declarations: [
    AppNavigationComponent,
    AppMastheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppNavigationComponent, AppMastheadComponent]
})
export class AppModule { }
