import { Routes } from '@angular/router';

//Import Component
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


export const routes: Routes = [
    { path: 'planets', component: PlanetsListComponent},
    { path: '', component: HomePageComponent},
];
