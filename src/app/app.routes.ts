import { Routes } from '@angular/router';

//Import Component
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';
import { Erreur404Component } from './erreur404/erreur404.component';


export const routes: Routes = [
    { path: 'planets', component: PlanetsListComponent},
    { path: 'planets/:id', component: PlanetDetailComponent },
    { path: '', component: HomePageComponent},
    { path: '**', component: Erreur404Component},
];
