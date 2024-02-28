import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../services/pokemon-api/pokemon-api.service';
import { PokemonList, Result } from '../../../interfaces/pokemon-list-interfaces';
import { Pokemon } from '../../../interfaces/pokemon.interfaces';

@Component({
  selector: 'o-pokemon-card-list',
  templateUrl: './o-pokemon-card-list.component.html',
  styleUrl: './o-pokemon-card-list.component.css'
})
export class OPokemonCardListComponent implements OnInit{

  public pokemonListResponse: PokemonList = { count: 0, next: '', previous: null, results: [] };
  public pokemonResults: Result[] = []
  public pokemonData: Pokemon | null = null;

  constructor(
    private pokemonApiService: PokemonApiService
  ){}

  ngOnInit(): void {
    this.searchPokemonList();
  }

  private searchPokemonList(): void {
    this.pokemonApiService.pokemonList(20,0).subscribe(
      pokemonListResponse => {
        this.pokemonListResponse = pokemonListResponse;
        this.pokemonResults = pokemonListResponse.results;
      }
    );
  }

  public onClickCard(name = 'cero'): void {
    console.warn(`:: CLICK EN CARD POKEMON ${name}::`);
    
  }

}
