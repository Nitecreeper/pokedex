import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonInfoPageComponent } from './pages/pokemon-info-page/pokemon-info-page.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonInfoPageComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
