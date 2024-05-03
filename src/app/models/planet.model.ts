export class CelestialBody {
  [key: string]: any;
  id!: string;
  name!: string;
  englishName!: string;
  isPlanet!: boolean;
  semimajorAxis: number;
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
  dimension?: string;
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
      this.semimajorAxis = data.semimajorAxis;
      this.moons = data.moons || [];
      this.imageUrl = data.imageUrl;
      this.mass = data.mass;
      this.vol = data.vol;
      this.gravity = data.gravity;
      this.dimension = data.dimension;
      this.radius = data.radius;
      this.eccentricity = data.eccentricity; 
      this.inclination = data.inclination; 
      this.discoveredBy = data.discoveredBy; 
      this.discoveryDate = data.discoveryDate; 
      this.alternativeName = data.alternativeName; 
      this.axialTilt = data.axialTilt; 
      this.avgTemp = data.avgTemp; 
  }
}
