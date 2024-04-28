import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemMapComponent } from './systeme-map/systeme-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SystemMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SolarsSystemeExplorer';
}
