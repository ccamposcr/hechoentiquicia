import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './app.navigation.html',
  styleUrls: ['./app.navigation.scss']
})
export class AppNavigationComponent {
  menuItems = [
   {
      'item': 'Nosotros',
      'url': '/nosotros'
    }
  ];

  status: boolean = false;
  openMenu(){
      this.status = !this.status;
      console.log(this.status);      
  }
}
