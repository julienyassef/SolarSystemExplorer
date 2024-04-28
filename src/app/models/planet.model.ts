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
  eccentricity?: number; 
  inclination?: number; 
  discoveredBy?: string;
  discoveryDate?: string; 
  alternativeName?: string; 
  axialTilt?: number; 
  avgTemp?: number; 

  constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.englishName = data.englishName;
      this.isPlanet = data.isPlanet;
      this.moons = data.moons;
      this.imageUrl = data.imageUrl;
      this.mass = data.mass;
      this.vol = data.vol;
      this.gravity = data.gravity;
      this.radius = data.radius;
      this.eccentricity = data.eccentricity; // Initialisation de la propriété eccentricity
      this.inclination = data.inclination; // Initialisation de la propriété inclination
      this.discoveredBy = data.discoveredBy; // Initialisation de la propriété discoveredBy
      this.discoveryDate = data.discoveryDate; // Initialisation de la propriété discoveryDate
      this.alternativeName = data.alternativeName; // Initialisation de la propriété alternativeName
      this.axialTilt = data.axialTilt; // Initialisation de la propriété axialTilt
      this.avgTemp = data.avgTemp; // Initialisation de la propriété avgTemp
  }
}
