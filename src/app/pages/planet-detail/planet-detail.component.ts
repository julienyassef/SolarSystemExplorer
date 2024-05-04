import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelestialBody } from '../../models/planet.model';
import { SolarSystemService } from '../../services/solar-system.service';
import { NgIf } from '@angular/common';
import { Map3dPlanetsComponent } from '../../components/map3d-planets/map3d-planets.component';
import { PlanetsComponent } from '../../components/display-planets-picture/display-planets-picture.component';


@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [NgIf, Map3dPlanetsComponent, PlanetsComponent],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})

export class PlanetDetailComponent implements OnInit {
  planet!: CelestialBody | undefined;

  constructor(
    private route: ActivatedRoute,
    private solarSystemService: SolarSystemService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const planetId = params.get('id');
      if (planetId) {
        this.solarSystemService.getPlanetById(planetId).subscribe(planet => {
          this.planet = planet;
        });
      }
    });
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
