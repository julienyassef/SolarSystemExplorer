import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CelestialBody } from '../../models/planet.model';
import { SolarSystemService } from '../../services/solar-system.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-planets-cards',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './planets-cards.component.html',
  styleUrl: './planets-cards.component.scss'
})

export class PlanetsCardsComponent implements OnInit {
  bodies$!: Observable<CelestialBody[]>;

  constructor(private solarSystemService: SolarSystemService) { }

  ngOnInit() {
    this.bodies$ = this.solarSystemService.getBodies();
  }
}
