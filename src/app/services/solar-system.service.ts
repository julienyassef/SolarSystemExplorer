import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  // Méthode pour obtenir les détails d'un corps spécifique par ID
  getBodyById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/bodies/${id}`);
  }

  // Méthode pour obtenir le nombre d'objets connus dans le système solaire
  getKnownCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/knowncount/`);
  }
}
