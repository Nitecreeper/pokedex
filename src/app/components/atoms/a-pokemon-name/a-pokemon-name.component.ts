import { Component, Input } from '@angular/core';

@Component({
  selector: 'a-pokemon-name',
  templateUrl: './a-pokemon-name.component.html',
  styleUrl: './a-pokemon-name.component.css'
})
export class APokemonNameComponent {
  @Input() public pokemonId: string = '';
  @Input() public pokemonName: string = '';
}
