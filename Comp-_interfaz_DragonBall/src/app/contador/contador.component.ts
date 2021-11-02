import { Component } from '@angular/core';

// Decorador es una clase que permite heredar características a otras clases
@Component({
  selector: 'app-contador',// Este indica el nombre del componente desplegado en index.html
  templateUrl: './contador.component.html', // Ruta del contenido
  styleUrls: ['../app.component.css']
})
export class AppContador {
  title = 'Contador';
  numero:number = 0;
  
  // sumar(){
  //   this.numero +=1
  // }
  // restar(){
  //   this.numero -=1
  // }

  base:number=200;

  sumaResta(valor:number){
    this.numero +=valor;
  }

}
