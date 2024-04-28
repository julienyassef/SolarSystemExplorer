import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemMapComponent } from './component/systeme-map/systeme-map.component';
import { PlanetsCardsComponent } from './component/planets-cards/planets-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlanetsCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SolarsSystemeExplorer';
}
