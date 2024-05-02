import { Component, Input } from '@angular/core';
import { CelestialBody } from '../../models/planet.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-planet-card',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.scss'
})
export class PlanetCardComponent {
  @Input() planet!: CelestialBody;

  private localPlanetImages = [
    { name: "Mercure", image: "assets/picturePlanet/mercury.jpg" },
    { name: "Vénus", image: "assets/picturePlanet/venus.jpg" },
    { name: "La Terre", image: "assets/picturePlanet/earth.jpg" },
    { name: "Mars", image: "assets/picturePlanet/mars.jpg" },
    { name: "Jupiter", image: "assets/picturePlanet/jupiter.jpg" },
    { name: "Saturne", image: "assets/picturePlanet/saturn.jpg" },
    { name: "Uranus", image: "assets/picturePlanet/uranus.jpg" },
    { name: "Neptune", image: "assets/picturePlanet/neptune.jpg" },
  
  ];

  getImage(planetName: string): string {
    const found = this.localPlanetImages.find(p => p.name === planetName);
    return found ? found.image : 'assets/picturePlanet/blackStar.jpg'; 
  }

}
