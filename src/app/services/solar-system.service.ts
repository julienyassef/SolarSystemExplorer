import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CelestialBody } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})

export class SolarSystemService {
  private baseUrl = 'https://api.le-systeme-solaire.net/rest';

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir tous les corps du système solaire
  getBodies(): Observable<CelestialBody[]> {
    return this.http.get<{bodies: any[]}>(`${this.baseUrl}/bodies/`).pipe(
      map(response => response.bodies.map(body => new CelestialBody(body)))
    );
  }

   // Méthode pour obtenir uniquement les planètes
   getPlanets(): Observable<CelestialBody[]> {
    return this.getBodies().pipe(
      map(bodies => bodies.filter(body => body.isPlanet))
    );
  }

  // Méthode pour obtenir les planètes par ID
  getPlanetById(id: string): Observable<CelestialBody> {
    return this.http.get<CelestialBody>(`${this.baseUrl}/bodies/${id}`);
  }

  sortPlanets(planets: CelestialBody[], sortKey: keyof CelestialBody, ascending: boolean = true): Observable<CelestialBody[]> {
    return of(planets.sort((a, b) => {
      let aValue = a[sortKey]; 
      let bValue = b[sortKey];
      if (aValue < bValue) {
        return ascending ? -1 : 1;
      }
      if (aValue > bValue) {
        return ascending ? 1 : -1;
      }
      return 0;
    }));
  }


  getPlanetNames(): string[] {

    return ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  }



}
