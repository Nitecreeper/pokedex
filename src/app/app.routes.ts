import { Routes } from '@angular/router';
import { PPokemonListComponent } from './components/pages/p-pokemon-list/p-pokemon-list.component';
import { PPokemonDetailComponent } from './components/pages/p-pokemon-detail/p-pokemon-detail.component';

export const routes: Routes = [
    {'path': 'list', 'title': 'List', component: PPokemonListComponent},
    {'path': 'detail', 'title': 'Detail', component: PPokemonDetailComponent},
    {'path': '', redirectTo: '/list', pathMatch: 'full'},
    {'path': '**', component: PPokemonListComponent},
];
