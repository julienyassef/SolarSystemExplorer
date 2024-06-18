import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CelestialBody } from '../../models/planet.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-planet-card',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent {
  @Input() planet!: CelestialBody;

  constructor(private router: Router) {}

  navigateToPlanet() {
    if (this.planet && this.planet.id) {
      console.log(`Navigating to planet with ID: ${this.planet.id}`);
      this.router.navigate(['/planets', this.planet.id]);
    } else {
      console.error('Invalid planet ID:', this.planet?.id);
    }
  }

  private localPlanetImages = [
    { id: "mercury", name: "Mercure", image: "assets/picturePlanet/mercury.png" },
    { id: "venus", name: "Vénus", image: "assets/picturePlanet/venus.png" },
    { id: "earth", name: "La Terre", image: "assets/picturePlanet/earth.png" },
    { id: "mars", name: "Mars", image: "assets/picturePlanet/mars.png" },
    { id: "jupiter", name: "Jupiter", image: "assets/picturePlanet/jupiter.png" },
    { id: "saturn", name: "Saturne", image: "assets/picturePlanet/saturne.png" },
    { id: "uranus", name: "Uranus", image: "assets/picturePlanet/uranus.png" },
    { id: "neptune", name: "Neptune", image: "assets/picturePlanet/neptune.png" },
  ];

  getImage(planetName: string): string {
    const found = this.localPlanetImages.find(p => p.name === planetName);
    return found ? found.image : 'assets/picturePlanet/blackStar.jpg';
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
