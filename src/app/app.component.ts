import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonApiService } from './services/pokemon-api/pokemon-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [PokemonApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
