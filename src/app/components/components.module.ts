import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APokemonImageComponent } from './atoms/a-pokemon-image/a-pokemon-image.component';
import { APokemonNameComponent } from './atoms/a-pokemon-name/a-pokemon-name.component';
import { MPokemonCardComponent } from './molecules/pokemon-card/pokemon-card.component';
import { OPokemonCardListComponent } from './organisms/o-pokemon-card-list/o-pokemon-card-list.component';
import { TNavBarComponent } from './templates/t-nav-bar/t-nav-bar.component';
import { PPokemonListComponent } from './pages/p-pokemon-list/p-pokemon-list.component';



@NgModule({
  declarations: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent,
    OPokemonCardListComponent,
    TNavBarComponent,
    PPokemonListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent,
    OPokemonCardListComponent,
    TNavBarComponent,
    PPokemonListComponent,
  ]
})
export class ComponentsModule { }
