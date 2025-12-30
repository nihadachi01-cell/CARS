
import React from 'react';
import { Car } from '../types';
import { X, CheckCircle2 } from 'lucide-react';

interface TransactionModalProps {
  car: Car | null;
  type: 'rent' | 'buy' | null;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ car, type, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);

  if (!car || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden animate-in zoom-in-95 duration-300 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="p-12 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]">
            <CheckCircle2 className="w-16 h-16 text-white animate-bounce" />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Inquiry Received</h2>
            <p className="text-zinc-500 max-w-xs mx-auto leading-relaxed">
              Our Elite Concierge team will contact you within 15 minutes to finalize the details for your {car.brand} {car.name}.
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-48 md:h-auto">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{car.brand}</p>
                <h3 className="text-xl font-black uppercase text-white">{car.name}</h3>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="md:w-3/5 p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">
                  {type === 'rent' ? 'Reserve for Rent' : 'Start Purchase'}
                </h2>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  {type === 'rent' ? `Starting at $${car.rentPrice}/day` : `Valued at $${car.buyPrice.toLocaleString()}`}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-sm text-white focus:outline-none focus:border-white/40 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-sm text-white focus:outline-none focus:border-white/40 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Message (Optional)</label>
                  <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-sm text-white focus:outline-none focus:border-white/40 transition-all resize-none" />
                </div>
              </div>

              <button type="submit" className="w-full bg-white text-black py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-200 active:scale-95 transition-all">
                Send Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionModal;
