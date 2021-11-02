import { Component } from '@angular/core';

// Decorador es una clase que permite heredar características a otras clases
@Component({
  selector: 'app-root',// Este indica el nombre del componente desplegado en index.html
  templateUrl: './app.component.html', // Ruta del contenido
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
