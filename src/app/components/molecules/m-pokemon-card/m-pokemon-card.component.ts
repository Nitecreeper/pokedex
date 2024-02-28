import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../services/pokemon-api/pokemon-api.service';
import { Pokemon, Type } from '../../../interfaces/pokemon.interfaces';
import { COLOR_BY_TYPE } from '../../shared/styles/colors';

@Component({
  selector: 'm-pokemon-card',
  templateUrl: './m-pokemon-card.component.html',
  styleUrl: './m-pokemon-card.component.css'
})
export class MPokemonCardComponent implements OnInit{
  @Input() public pokemonUrl: string = '';
  
  public pokemonData: Pokemon | null = null;
  public imgSrc: string | undefined = '';
  public imgAlt: string = '';
  public pokemonId: string = '';
  public pokemonName: string = '';
  public types: Type[] = [];
  public backgroundCardColor: string = '#FFFFFF';

  constructor(
    private pokemonApiService:PokemonApiService
  ){}

  ngOnInit(): void {
    this.searchPokemonData(this.pokemonUrl);
  }
  
  public searchPokemonData(url: string): void {
    this.pokemonApiService.pokemonData(url).subscribe(
      pokemonData =>{
        this.pokemonData = pokemonData;
        this.imgSrc = pokemonData.sprites.other?.['official-artwork'].front_default;
        this.pokemonId = pokemonData.id.toString();
        this.pokemonName = pokemonData.name;
        this.types = pokemonData.types;
        this.backgroundCardColorSelector();
      }
    )
  }

  public backgroundCardColorSelector(): void{
    const tipoPokemon = this.types[0].type.name;
    this.backgroundCardColor = COLOR_BY_TYPE[tipoPokemon];
  }

  public backgroundTextColorSelector(word: string): string{
    return COLOR_BY_TYPE[word];
  }
}
