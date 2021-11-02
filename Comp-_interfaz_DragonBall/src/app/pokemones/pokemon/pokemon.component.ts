import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  nombre:string= 'Pikachu'
  puntosAtaque: number= 100;
  obtenerNombre():string{
    return `${this.nombre} - ${this.puntosAtaque}`
  }
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  cambiarNombre():void{
    this.nombre = 'Squirtle'
  }
    cambiarAtaque():void{
      console.log("cambie")
    this.puntosAtaque = 500
  }
}
