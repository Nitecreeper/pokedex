import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";
import { PokemonInfoPageComponent } from "./pages/pokemon-info-page/pokemon-info-page.component";

const routes: Routes = [
    {path: 'pokemon-list', component: PokemonListComponent},
    {path: 'by/:id', component: PokemonInfoPageComponent},
    {path: '**', redirectTo: 'pokemon-list'}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
}
)
export class PokemonRoutingModule{}