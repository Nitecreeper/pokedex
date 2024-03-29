import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { PokemonList } from '../../interfaces/pokemon-list-interfaces';
import { Pokemon } from '../../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private apiPath: string = 'https://pokeapi.co/api/v2/';

  constructor(
    private httpClient: HttpClient
  ) {
    console.warn('PokemonApiService: INIT');
    
  }

  public pokemonList(limit: number, offset: number): Observable<PokemonList>{
    const url = `${this.apiPath}pokemon?limit=${limit}&offset=${offset}`;
    
    console.log('::: PokemonService: pokemonList ::: ->','Get a la url:', url)
    
    return this.httpClient.get<PokemonList>(url)
                .pipe( catchError( () => of()) );
  }

  public pokemonData(pokemonUrl: string): Observable<Pokemon>{

    console.log('::: PokemonService: pokemonData ::: ->','Get a la url:', pokemonUrl)

    return this.httpClient.get<Pokemon>(pokemonUrl)
                .pipe( catchError( () => of()) );
  }
}
