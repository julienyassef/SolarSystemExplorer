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
    { name: "Mercure", image: "assets/picturePlanet/mercury.png" },
    { name: "Vénus", image: "assets/picturePlanet/venus.png" },
    { name: "La Terre", image: "assets/picturePlanet/earth.png" },
    { name: "Mars", image: "assets/picturePlanet/mars.png" },
    { name: "Jupiter", image: "assets/picturePlanet/jupiter.png" },
    { name: "Saturne", image: "assets/picturePlanet/saturne.png" },
    { name: "Uranus", image: "assets/picturePlanet/uranus.png" },
    { name: "Neptune", image: "assets/picturePlanet/neptune.png" },
  
  ];

  getImage(planetName: string): string {
    const found = this.localPlanetImages.find(p => p.name === planetName);
    return found ? found.image : 'assets/picturePlanet/blackStar.jpg'; 
    
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

}
