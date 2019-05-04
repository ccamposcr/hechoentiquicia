import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.navigation.html',
  styleUrls: ['./app.navigation.scss']
})
export class AppComponent {
  menuItems = [
    {
      'item': 'Nosotros',
      'url': '/'
    },
    {
      'item': 'Servicios',
      'url': '/'
    },
    {
      'item': 'Contáctenos',
      'URL': '/'
    }
  ];

  status: boolean = false;
  openMenu(){
      this.status = !this.status;
      console.log(this.status);      
  }
}
