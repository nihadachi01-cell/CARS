
import { Car } from './types';

export const CARS_DATA: Car[] = [
  {
    id: 'porsche-gt3-rs',
    brand: 'Porsche',
    name: '911 GT3 RS',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000',
    rentPrice: 1200,
    buyPrice: 245000,
    category: 'Track',
    specs: {
      engine: '4.0L Flat-6',
      power: '518 HP',
      acceleration: '3.0s (0-60)',
      topSpeed: '184 mph'
    }
  },
  {
    id: 'lambo-revuelto',
    brand: 'Lamborghini',
    name: 'Revuelto',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2000',
    rentPrice: 2500,
    buyPrice: 608000,
    category: 'Supercar',
    specs: {
      engine: '6.5L V12 Hybrid',
      power: '1001 HP',
      acceleration: '2.5s (0-60)',
      topSpeed: '217 mph'
    }
  },
  {
    id: 'ferrari-sf90',
    brand: 'Ferrari',
    name: 'SF90 Stradale',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=2000',
    rentPrice: 2200,
    buyPrice: 524000,
    category: 'Supercar',
    specs: {
      engine: '4.0L V8 Hybrid',
      power: '986 HP',
      acceleration: '2.5s (0-60)',
      topSpeed: '211 mph'
    }
  },
  {
    id: 'amg-gt-bs',
    brand: 'Mercedes-AMG',
    name: 'GT Black Series',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=2000',
    rentPrice: 1800,
    buyPrice: 325000,
    category: 'Track',
    specs: {
      engine: '4.0L V8 Biturbo',
      power: '720 HP',
      acceleration: '3.1s (0-60)',
      topSpeed: '202 mph'
    }
  },
  {
    id: 'bmw-m4-csl',
    brand: 'BMW M',
    name: 'M4 CSL',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1619362224246-7015443658dc?auto=format&fit=crop&q=80&w=2000',
    rentPrice: 850,
    buyPrice: 139000,
    category: 'Luxury',
    specs: {
      engine: '3.0L Straight-6',
      power: '543 HP',
      acceleration: '3.6s (0-60)',
      topSpeed: '191 mph'
    }
  },
  {
    id: 'mclaren-750s',
    brand: 'McLaren',
    name: '750S Spider',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=2000',
    rentPrice: 1900,
    buyPrice: 345000,
    category: 'Supercar',
    specs: {
      engine: '4.0L V8',
      power: '740 HP',
      acceleration: '2.7s (0-60)',
      topSpeed: '206 mph'
    }
  }
];
