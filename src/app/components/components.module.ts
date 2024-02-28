import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { APokemonImageComponent } from './atoms/a-pokemon-image/a-pokemon-image.component';
import { APokemonNameComponent } from './atoms/a-pokemon-name/a-pokemon-name.component';
import { MPokemonCardComponent } from './molecules/m-pokemon-card/m-pokemon-card.component';
import { OPokemonCardListComponent } from './organisms/o-pokemon-card-list/o-pokemon-card-list.component';
import { PPokemonDetailComponent } from './pages/p-pokemon-detail/p-pokemon-detail.component';
import { PPokemonListComponent } from './pages/p-pokemon-list/p-pokemon-list.component';
import { TPokemonListComponent } from './templates/t-pokemon-list/t-pokemon-list.component';
import { ONavBarComponent } from './organisms/o-nav-bar/o-nav-bar.component';



@NgModule({
  declarations: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent,
    OPokemonCardListComponent,
    PPokemonDetailComponent,
    PPokemonListComponent,
    TPokemonListComponent,
    ONavBarComponent,
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
    PPokemonDetailComponent,
    PPokemonListComponent,
    TPokemonListComponent,
    ONavBarComponent,
  ]
})
export class ComponentsModule { }
