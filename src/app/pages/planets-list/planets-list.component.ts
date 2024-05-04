import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
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
  planets$!: Observable<CelestialBody[]>;
  loading: boolean = true;
  sortKey: keyof CelestialBody = 'name';  // Définir un critère de tri initial
  ascending: boolean = true;  // Définir la direction initiale du tri

  constructor(private solarSystemService: SolarSystemService) { }

  ngOnInit() {
    this.loadSortedPlanets();
  }

  loadSortedPlanets(): void {
    this.loading = true; // Activer le loader avant de commencer le chargement
    this.planets$ = this.solarSystemService.getPlanets().pipe(
      switchMap(planets => this.solarSystemService.sortPlanets(planets, this.sortKey, this.ascending)),
      finalize(() => this.loading = false) // Désactiver le loader une fois le chargement terminé
    );
  }
  changeSort(newSortKey: keyof CelestialBody): void {
    if (this.sortKey === newSortKey) {
      this.ascending = !this.ascending;  
    } else {
      this.sortKey = newSortKey;
      this.ascending = true;  
    }
    this.loadSortedPlanets();  
  }
}

