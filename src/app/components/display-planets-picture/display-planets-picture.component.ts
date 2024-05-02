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
    { name: "Mercure", image: "assets/picturePlanet/mercury.jpg" },
    { name: "Vénus", image: "assets/picturePlanet/venus.jpg" },
    { name: "Terre", image: "assets/picturePlanet/earth.jpg" },
    { name: "Mars", image: "assets/picturePlanet/mars.jpg" },
    { name: "Jupiter", image: "assets/picturePlanet/jupiter.jpg" },
    { name: "Saturne", image: "assets/picturePlanet/saturn.jpg" },
    { name: "Uranus", image: "assets/picturePlanet/uranus.jpg" },
    { name: "Neptune", image: "assets/picturePlanet/neptune.jpg" },
  
  ];

  constructor() { }

  ngOnInit(): void { }
}