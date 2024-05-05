import { Component } from '@angular/core';
import { Map3dPlanetsComponent } from '../../components/map3d-planets/map3d-planets.component';
import { PlanetsComponent } from '../../components/display-planets-picture/display-planets-picture.component';
import { NightStarAnimationComponent } from '../../components/night-star-animation/night-star-animation.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Map3dPlanetsComponent, PlanetsComponent, NightStarAnimationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  

}
