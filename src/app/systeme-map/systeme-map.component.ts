import { Component, OnInit } from '@angular/core';

//Import Serice
import { SolarSystemService } from '../services/solar-system.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-systeme-map',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './systeme-map.component.html',
  styleUrl: './systeme-map.component.scss'
})

export class SystemMapComponent implements OnInit {
  bodies: any[] = [];


  constructor(private solarSystemService: SolarSystemService) { }

  ngOnInit() {
    this.solarSystemService.getBodies().subscribe(data => {
      this.bodies = data.bodies;
      console.log(this.bodies);
    });
  }
}