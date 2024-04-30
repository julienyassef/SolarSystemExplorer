import { Component } from '@angular/core';
import { Map3dPlanetsComponent } from '../map3d-planets/map3d-planets.component';
import { PlanetsComponent } from '../display-planets-picture/display-planets-picture.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Map3dPlanetsComponent, PlanetsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
