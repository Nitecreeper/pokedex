import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { APokemonImageComponent } from './atoms/a-pokemon-image/a-pokemon-image.component';
import { APokemonNameComponent } from './atoms/a-pokemon-name/a-pokemon-name.component';
import { MPokemonCardComponent } from './molecules/pokemon-card/pokemon-card.component';
import { OPokemonCardListComponent } from './organisms/o-pokemon-card-list/o-pokemon-card-list.component';
import { PPokemonListComponent } from './pages/p-pokemon-list/p-pokemon-list.component';
import { TNavBarComponent } from './templates/t-nav-bar/t-nav-bar.component';
import { TPokemonListComponent } from './templates/t-pokemon-list/t-pokemon-list.component';



@NgModule({
  declarations: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent,
    OPokemonCardListComponent,
    PPokemonListComponent,
    TNavBarComponent,
    TPokemonListComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent,
    OPokemonCardListComponent,
    PPokemonListComponent,
    TNavBarComponent,
    TPokemonListComponent,
  ]
})
export class ComponentsModule { }
