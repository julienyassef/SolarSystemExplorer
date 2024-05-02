import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SolarSystemService } from '../../services/solar-system.service';
import { CelestialBody } from '../../models/planet.model';
import { PlanetCardComponent } from '../../components/planet-card/planet-card.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { NightStarAnimationComponent } from '../../components/night-star-animation/night-star-animation.component';

@Component({
  selector: 'app-planets-list',
  standalone: true,
  imports: [NgFor, CommonModule, PlanetCardComponent, LoaderComponent, NightStarAnimationComponent],
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.scss'
})
export class PlanetsListComponent implements OnInit  {
  planets$!:  Observable<CelestialBody[]>;
  loading: boolean = true; 

  constructor(private solarSystemService: SolarSystemService) { }


  ngOnInit() {
    // Utiliser `finalize` pour changer l'état de `loading` une fois les données chargées
    this.planets$ = this.solarSystemService.getPlanets().pipe(
      finalize(() => this.loading = false)
    );
  }
}
