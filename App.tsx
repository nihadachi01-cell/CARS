
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import SmokeEffect from './components/SmokeEffect.tsx';
import CarCard from './components/CarCard.tsx';
import AIChat from './components/AIChat.tsx';
import TransactionModal from './components/TransactionModal.tsx';
import { CARS_DATA } from './constants.ts';
import { Car } from './types.ts';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [activeCar, setActiveCar] = useState<Car | null>(null);
  const [transactionType, setTransactionType] = useState<'rent' | 'buy' | null>(null);

  const handleAction = (car: Car, type: 'rent' | 'buy') => {
    setActiveCar(car);
    setTransactionType(type);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-white selection:text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <SmokeEffect />
        
        {/* Animated Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[40vw] font-black tracking-tighter leading-none">CARS</h1>
        </div>

        {/* Content Overlay */}
        <div className="relative z-30 text-center space-y-8 max-w-5xl px-6 -mt-20">
          <p className="text-zinc-500 text-xs font-black uppercase tracking-[1em] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Exclusive Mobility
          </p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Precision <br /> 
            <span className="text-zinc-500">Meets Power.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-8">
            <button 
              onClick={() => scrollToSection('fleet')}
              className="group relative px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest overflow-hidden transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">Explore Fleet</span>
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="px-12 py-5 border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-colors duration-300 active:scale-95"
            >
              Visit Showroom
            </button>
          </div>
        </div>

        {/* Hero Car Display - Centered Focal Point */}
        <div className="absolute bottom-[-5vh] left-1/2 -translate-x-1/2 w-full max-w-[1400px] z-20 pointer-events-none px-4">
           <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2400" 
              alt="Porsche GT3 RS"
              className="w-full h-auto drop-shadow-[0_20px_100px_rgba(0,0,0,1)] brightness-[0.85] animate-in fade-in zoom-in-95 duration-1000 delay-500"
           />
        </div>

        <button 
          onClick={() => scrollToSection('fleet')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-40 p-2 cursor-pointer hover:text-white transition-colors"
        >
          <ChevronDown className="text-zinc-600 w-6 h-6" />
        </button>
      </section>

      {/* Fleet Grid */}
      <section id="fleet" className="relative z-30 bg-[#050505] py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">The Catalog</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Curated Fleet</h2>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {['All', 'Supercar', 'Track', 'Luxury'].map((cat) => (
                <button 
                  key={cat}
                  className="px-6 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10 hover:border-white/40 transition-colors whitespace-nowrap active:scale-95"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS_DATA.map((car) => (
              <CarCard key={car.id} car={car} onAction={handleAction} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-40 bg-zinc-950 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-luxury italic leading-tight text-zinc-300">
            "Automotive excellence is not a choice, it is our standard. Every vehicle in our stable represents the pinnacle of engineering and design."
          </h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-black">Marcus V. &mdash; CEO of CARS</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter uppercase">CARS</h3>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              Providing exclusive access to the world's most desired automotive masterpieces. 
              Rent, buy, and experience the future of high-performance mobility.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col space-y-4 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest">Location</h4>
            <div className="text-sm text-zinc-500 space-y-2 leading-relaxed">
              <p>One World Trade Center</p>
              <p>Suite 82, New York, NY</p>
              <p className="pt-4 text-white font-bold">+1 (800) CARS-ELITE</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em]">
          <p>© 2024 CARS Automotive Group. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Transaction Modal */}
      <TransactionModal 
        car={activeCar} 
        type={transactionType} 
        onClose={() => { setActiveCar(null); setTransactionType(null); }} 
      />

      {/* AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
