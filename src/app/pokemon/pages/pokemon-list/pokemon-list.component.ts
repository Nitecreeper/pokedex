import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service.service';
import { PokemonList, Result } from '../../interfaces/pokemon-list.interface';

@Component({
  selector: 'pokemon-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  public pokemonListResponse: PokemonList = { count: 0, next: '', previous: null, results: [] };
  public pokemonResults: Result[] = [];

  constructor(
    private pokemonService: PokemonService
  ){}

  ngOnInit(): void {
    this.searchPokemonList();    
  }

  public searchPokemonList(): void{
    this.pokemonService.pokemonList(9,0).subscribe(
      pokemonListResponse => {
        this.pokemonListResponse = pokemonListResponse
        this.pokemonResults = pokemonListResponse.results;
      }
    )
  }

}
