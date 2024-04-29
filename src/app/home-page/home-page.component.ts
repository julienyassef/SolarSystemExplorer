import { Component } from '@angular/core';
import { Map3dPlanetsComponent } from '../map3d-planets/map3d-planets.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Map3dPlanetsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
