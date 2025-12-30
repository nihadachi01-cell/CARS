
import React from 'react';
import { Car } from '../types';
import { Activity, Gauge, Zap, Wind } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onAction: (car: Car, type: 'rent' | 'buy') => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onAction }) => {
  return (
    <div className="group relative bg-[#111] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-white/20 flex flex-col">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{car.category}</span>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">{car.brand} {car.name}</h3>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-zinc-500">
            <Gauge className="w-4 h-4" />
            <span className="text-xs">{car.specs.power}</span>
          </div>
          <div className="flex items-center space-x-2 text-zinc-500">
            <Zap className="w-4 h-4" />
            <span className="text-xs">{car.specs.acceleration}</span>
          </div>
          <div className="flex items-center space-x-2 text-zinc-500">
            <Wind className="w-4 h-4" />
            <span className="text-xs">{car.specs.topSpeed}</span>
          </div>
          <div className="flex items-center space-x-2 text-zinc-500">
            <Activity className="w-4 h-4" />
            <span className="text-xs truncate">{car.specs.engine}</span>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-white/5 pt-6">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Rent from</p>
            <p className="text-lg font-bold text-white">${car.rentPrice}<span className="text-xs font-normal text-zinc-500 lowercase">/day</span></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Purchase</p>
            <p className="text-lg font-bold text-white">${car.buyPrice.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button 
            onClick={() => onAction(car, 'rent')}
            className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-black uppercase tracking-widest transition-all rounded-sm active:scale-95"
          >
            Rent Now
          </button>
          <button 
            onClick={() => onAction(car, 'buy')}
            className="py-3 px-4 bg-white hover:bg-zinc-200 text-black text-[10px] font-black uppercase tracking-widest transition-all rounded-sm active:scale-95"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
