import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContador } from './contador/contador.component';
import { PokemonComponent } from './pokemones/pokemon/pokemon.component';
import { ListadoComponent } from './pokemones/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent, AppContador, PokemonComponent, ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // El componente que quiero renderizar
})
export class AppModule { }
