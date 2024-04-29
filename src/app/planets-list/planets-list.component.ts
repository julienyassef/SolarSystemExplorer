import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolarSystemService } from '../services/solar-system.service';
import { CelestialBody } from '../models/planet.model';
import { PlanetCardComponent } from '../planet-card/planet-card.component';

@Component({
  selector: 'app-planets-list',
  standalone: true,
  imports: [NgFor, CommonModule, PlanetCardComponent],
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.scss'
})
export class PlanetsListComponent implements OnInit  {
  planets$!:  Observable<CelestialBody[]>;

  constructor(private solarSystemService: SolarSystemService) { }


  ngOnInit() {
    this.planets$ = this.solarSystemService.getBodies();
  }
}