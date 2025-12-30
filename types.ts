
export interface CarSpecs {
  engine: string;
  power: string;
  acceleration: string;
  topSpeed: string;
}

export interface Car {
  id: string;
  brand: string;
  name: string;
  year: number;
  image: string;
  rentPrice: number;
  buyPrice: number;
  specs: CarSpecs;
  category: 'Supercar' | 'Luxury' | 'Track';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
