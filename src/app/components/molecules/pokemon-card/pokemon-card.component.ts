import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../services/pokemon-api/pokemon-api.service';
import { Pokemon } from '../../../interfaces/pokemon.interfaces';

@Component({
  selector: 'm-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class MPokemonCardComponent implements OnInit{
  @Input() public pokemonUrl: string = '';
  
  public pokemonData: Pokemon | null = null;
  public imgSrc: string | undefined = '';
  public imgAlt: string = '';
  public pokemonId: string = '';
  public pokemonName: string = '';

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
      }
    )
  }
}
