import { Component } from '@angular/core';
import { Map3dPlanetsComponent } from '../map3d-planets/map3d-planets.component';
import { PlanetsComponent } from '../display-planets-picture/display-planets-picture.component';
import { NightStarAnimationComponent } from '../night-star-animation/night-star-animation.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Map3dPlanetsComponent, PlanetsComponent, NightStarAnimationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
