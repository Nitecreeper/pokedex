import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APokemonImageComponent } from './atoms/a-pokemon-image/a-pokemon-image.component';
import { APokemonNameComponent } from './atoms/a-pokemon-name/a-pokemon-name.component';
import { MPokemonCardComponent } from './molecules/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    APokemonImageComponent,
    APokemonNameComponent,
    MPokemonCardComponent
  ]
})
export class ComponentsModule { }
