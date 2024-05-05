import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelestialBody } from '../../models/planet.model';
import { SolarSystemService } from '../../services/solar-system.service';
import { NgIf } from '@angular/common';
import { Map3dPlanetsComponent } from '../../components/map3d-planets/map3d-planets.component';
import { PlanetsComponent } from '../../components/display-planets-picture/display-planets-picture.component';
import { NightStarAnimationComponent } from '../../components/night-star-animation/night-star-animation.component';
import { switchMap } from 'rxjs';
import { Erreur404Component } from '../../erreur404/erreur404.component';



@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [NgIf, Map3dPlanetsComponent, PlanetsComponent, NightStarAnimationComponent, Erreur404Component],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})

export class PlanetDetailComponent implements OnInit {
  planet!: CelestialBody | undefined | null;
  planetNames: string[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private solarSystemService: SolarSystemService
  ) {}

  ngOnInit() {
    this.planetNames = this.solarSystemService.getPlanetNames();

    this.route.paramMap.pipe(
      switchMap(params => {
        const planetId = params.get('id');
        if (planetId && this.isValidId(planetId)) {
          return this.solarSystemService.getPlanetById(planetId);
        }
        this.router.navigate(['/**']);
        throw new Error('Invalid planet ID'); 
      })
    ).subscribe({
      next: (planet) => {
        this.planet = planet;
      },
      error: (error) => {
        console.error(error);
        this.planet = null; 
      }
    });
  }

  isValidId(id: string): boolean {
    return this.planetNames.includes(id);
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
