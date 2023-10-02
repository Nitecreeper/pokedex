import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";

const routes: Routes = [
    {path: 'pokemon-list', component: PokemonListComponent},
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