import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-planets-picture',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './display-planets-picture.component.html',
  styleUrl: './display-planets-picture.component.scss'
})

export class PlanetsComponent implements OnInit {
  planets = [
    { name: "Mercure", image: "assets/picturePlanet/mercury.png" },
    { name: "Vénus", image: "assets/picturePlanet/venus.png" },
    { name: "Terre", image: "assets/picturePlanet/earth.png" },
    { name: "Mars", image: "assets/picturePlanet/mars.png" },
    { name: "Jupiter", image: "assets/picturePlanet/jupiter.png" },
    { name: "Saturne", image: "assets/picturePlanet/saturne.png" },
    { name: "Uranus", image: "assets/picturePlanet/uranus.png" },
    { name: "Neptune", image: "assets/picturePlanet/neptune.png" },
  
  ];

  constructor() { }

  ngOnInit(): void { }
}