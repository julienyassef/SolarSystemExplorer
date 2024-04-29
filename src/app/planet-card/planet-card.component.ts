import { Component, Input } from '@angular/core';
import { CelestialBody } from '../models/planet.model';

@Component({
  selector: 'app-planet-card',
  standalone: true,
  imports: [],
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.scss'
})
export class PlanetCardComponent {
  @Input() planet!: CelestialBody;

}
