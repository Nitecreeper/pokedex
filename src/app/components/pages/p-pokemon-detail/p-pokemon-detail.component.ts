import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../interfaces/pokemon.interfaces';
import { PokemonApiService } from '../../../services/pokemon-api/pokemon-api.service';

@Component({
  selector: 'p-pokemon-detail',
  templateUrl: './p-pokemon-detail.component.html',
  styleUrl: './p-pokemon-detail.component.css'
})
export class PPokemonDetailComponent implements OnInit{

  @Input('id') pokemonId!: string;

  public pokemonData: Pokemon | null = null;
  public imgSrc: string | undefined = '';
  public imgAlt: string = '';
  public pokemonName: string = '';

  public tempUrl: string = ''; // ELIMINAR ESTA VARIABLE!!!

  constructor(
    private pokemonApiService: PokemonApiService
  ){}

  ngOnInit(): void {
    this.searchPokemonData(this.pokemonId);
    this.tempUrl = `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`
  }

  private searchPokemonData(id: string): void {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
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
