import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  dragonBall:DragonBall[] = [{nombre: "Goku", color: "Amarillo"}, 
  {nombre: "Vegetta", color: "Azul"}, {nombre: "Picolo", color: "Verde"},
  {nombre: "Cell", color: "Morado"}, {nombre: "Mr.Satan", color: "Cafe"}];

  pokemonEliminado:any;
  borrarPokemon(){
    this.pokemonEliminado = this.dragonBall.pop(); //Es iportante el || para que no dé erorr
  }
}

interface DragonBall{
  nombre:string,
  color: string,
  //mostarPS:() => void; //No recibe nada pero no entrega nada
}