import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CelestialBody } from '../../models/planet.model';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-display-planets-picture',
  standalone: true,
  imports: [NgFor, CommonModule, LoaderComponent, NgIf],
  templateUrl: './display-planets-picture.component.html',
  styleUrl: './display-planets-picture.component.scss'
})

export class PlanetsComponent implements OnInit {
  loading: boolean = false

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToPlanet(planetId: string): void {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/planets', planetId]).finally(() => {
        this.loading = false;
      });
    }, 500); // Délai artificiel de 1 seconde pour tester
  }
  

  planets = [
    { id: "mercury", name: "Mercure", image: "assets/picturePlanet/mercury.png" },
    { id: "venus", name: "Vénus", image: "assets/picturePlanet/venus.png" },
    { id: "earth", name: "Terre", image: "assets/picturePlanet/earth.png" },
    { id: "mars", name: "Mars", image: "assets/picturePlanet/mars.png" },
    { id: "jupiter", name: "Jupiter", image: "assets/picturePlanet/jupiter.png" },
    { id: "saturn", name: "Saturne", image: "assets/picturePlanet/saturne.png" },
    { id: "uranus", name: "Uranus", image: "assets/picturePlanet/uranus.png" },
    { id: "neptune", name: "Neptune", image: "assets/picturePlanet/neptune.png" },
  ];
  

}