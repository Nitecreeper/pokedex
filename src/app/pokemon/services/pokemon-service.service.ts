import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from 'rxjs';
import { PokemonList } from '../interfaces/pokemon-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiPath: string = 'https://pokeapi.co/api/v2/'

  constructor(
    private httpClient: HttpClient
  ) { }

  public pokemonList(limit: number, offset: number): Observable<PokemonList>{
    const url = `${this.apiPath}pokemon?limit=${limit}&offset=${offset}`;
    
    return this.httpClient.get<PokemonList>(url)
                .pipe( catchError( () => of()) );
  }
}
