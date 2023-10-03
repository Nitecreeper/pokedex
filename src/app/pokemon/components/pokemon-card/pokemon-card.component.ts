import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/pokemon-list.interface';
import { PokemonService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit{

  @Input() public pokemonResult: Result = { name: '', url: '' };
  public pokemonData: Pokemon | null = null;
  public imgSrc: string | undefined = '';

  constructor(
    private pokemonService: PokemonService
  ){}

  ngOnInit(): void {
    this.pokemonService.pokemonData(this.pokemonResult.url).subscribe(
      pokemonData => {
        this.pokemonData = pokemonData;
        this.imgSrc = pokemonData!.sprites.other?.['official-artwork'].front_default;
      }
    );
  }
}
