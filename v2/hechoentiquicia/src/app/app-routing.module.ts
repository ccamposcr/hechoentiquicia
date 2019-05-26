import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppServicesComponent } from './components/services/app.services';
import { AppAboutUsComponent } from './components/about-us/app.about-us';

const routes: Routes = [ 
  { path: '', component: AppServicesComponent },
  { path: 'nosotros', component: AppAboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
