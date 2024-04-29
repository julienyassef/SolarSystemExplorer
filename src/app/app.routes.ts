import { Routes } from '@angular/router';

//Import Component
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
    { path: 'planets', component: PlanetsListComponent},
    { path: '', component: HomePageComponent},
];
