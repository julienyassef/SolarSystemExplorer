export class CelestialBody {
    id!: string;
    name!: string;
    englishName!: string;
    isPlanet!: boolean;
    moons!: Array<{ moon: string, rel: string }>;
    imageUrl!: string; 
    mass?: {
      massValue: number;
      massExponent: number;
    };
    vol?: {
      volValue: number;
      volExponent: number;
    };
    gravity?: number;
    radius?: {
      meanRadius: number;
      equaRadius: number;
      polarRadius: number;
    };

  }
  