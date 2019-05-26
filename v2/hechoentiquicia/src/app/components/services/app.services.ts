import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './app.services.html',
  styleUrls: ['./app.services.scss']
})
export class AppServicesComponent {
  services = [
      {
        'item': 'Desarrollo de sitios web'
      },
      {
        'item': 'Diseño de sitios web'
      },
      {
        'item': 'Diseño gráfico'
      },
      {
        'item': 'Desarrollo de aplicaciones móviles'
      },
      {
        'item': 'Campañas de email masivas'
      },
      {
        'item': 'Campañas en redes sociales'
      }
    ];
}
