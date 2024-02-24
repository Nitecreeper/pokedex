import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APokemonImageComponent } from './atoms/a-pokemon-image/a-pokemon-image.component';
import { APokemonNameComponent } from './atoms/a-pokemon-name/a-pokemon-name.component';



@NgModule({
  declarations: [
    APokemonImageComponent,
    APokemonNameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    APokemonImageComponent,
    APokemonNameComponent
  ]
})
export class ComponentsModule { }
